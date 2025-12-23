import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookedCourses from '../BookedCourses';

describe('BookedCourses Component', () => {
  it('renders the page title correctly', () => {
    render(<BookedCourses />);
    
    expect(
      screen.getByText(/Science Section: Mathematics, Physics & Chemistry/i)
    ).toBeInTheDocument();
  });

  it('displays all booking cards from dummy data', () => {
    render(<BookedCourses />);
    
    expect(screen.getByText('Belrah Mercy')).toBeInTheDocument();
    expect(screen.getByText('Samuel Adeyemi')).toBeInTheDocument();
    expect(screen.getByText('Chiamaka Okorie')).toBeInTheDocument();
  });

  it('renders correct status badges for different booking states', () => {
    render(<BookedCourses />);
    
    expect(screen.getByText('confirmed')).toBeInTheDocument();
    expect(screen.getByText('pending')).toBeInTheDocument();
    expect(screen.getByText('cancelled')).toBeInTheDocument();
  });

  it('displays booking prices correctly', () => {
    render(<BookedCourses />);
    
    expect(screen.getByText('₦52,000')).toBeInTheDocument();
    expect(screen.getByText('₦35,000')).toBeInTheDocument();
    expect(screen.getByText('₦28,000')).toBeInTheDocument();
  });

  it('shows appropriate action buttons based on booking status', () => {
    render(<BookedCourses />);
    
    const cancelButtons = screen.getAllByText('Cancel');
    const rescheduleButtons = screen.getAllByText('Reschedule');
    
    expect(cancelButtons).toHaveLength(3);
    expect(rescheduleButtons).toHaveLength(2);
  });
});

describe('StudentBookingCard Component', () => {
  const mockBooking = {
    id: 'test_001',
    tutorImage: 'https://example.com/image.jpg',
    tutorName: 'Test Tutor',
    courseTitle: 'Test Course',
    subjects: 'Math, Science',
    startDate: '2025-01-01',
    endDate: '2025-02-01',
    time: '10:00 A.M',
    price: '₦50,000',
    status: 'confirmed',
  };

  const mockHandlers = {
    onViewDetails: vi.fn(),
    onReschedule: vi.fn(),
    onCancel: vi.fn(),
  };

  it('renders booking card with all details', () => {
    render(
      <BookedCourses>
        <StudentBookingCard booking={mockBooking} {...mockHandlers} />
      </BookedCourses>
    );
    
    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('Test Tutor')).toBeInTheDocument();
    expect(screen.getByText('Math, Science')).toBeInTheDocument();
  });

  it('calls onViewDetails when View Details button is clicked', () => {
    const { container } = render(
      <div>
        <StudentBookingCard booking={mockBooking} {...mockHandlers} />
      </div>
    );
    
    const viewButton = screen.getByText('View Details');
    fireEvent.click(viewButton);
    
    expect(mockHandlers.onViewDetails).toHaveBeenCalledWith('test_001');
  });

  it('calls onCancel when Cancel button is clicked', () => {
    const { container } = render(
      <div>
        <StudentBookingCard booking={mockBooking} {...mockHandlers} />
      </div>
    );
    
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    
    expect(mockHandlers.onCancel).toHaveBeenCalledWith('test_001');
  });

  it('disables action buttons for cancelled bookings', () => {
    const cancelledBooking = { ...mockBooking, status: 'cancelled' };
    
    render(
      <div>
        <StudentBookingCard booking={cancelledBooking} {...mockHandlers} />
      </div>
    );
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it('displays correct status icon for each booking state', () => {
    const { rerender } = render(
      <div>
        <StudentBookingCard booking={mockBooking} {...mockHandlers} />
      </div>
    );
    
    expect(screen.getByText('confirmed')).toBeInTheDocument();
    
    const pendingBooking = { ...mockBooking, status: 'pending' };
    rerender(
      <div>
        <StudentBookingCard booking={pendingBooking} {...mockHandlers} />
      </div>
    );
    
    expect(screen.getByText('pending')).toBeInTheDocument();
  });
});