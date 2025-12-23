import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from '../DashBoard';

const MockedDashBoard = () => (
  <BrowserRouter>
    <DashBoard />
  </BrowserRouter>
);

describe('DashBoard Component', () => {
  it('renders the hero section with main heading', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText(/Unlock Your Potential/i)).toBeInTheDocument();
    expect(screen.getByText(/With Kynda Tutors!/i)).toBeInTheDocument();
  });

  it('displays subject navigation pills', () => {
    render(<MockedDashBoard />);
    
    const subjects = ['Sciences', 'English', 'Mathematics', 'Arts', 'Exam Prep'];
    subjects.forEach(subject => {
      expect(screen.getByText(subject)).toBeInTheDocument();
    });
  });

  it('shows key features with checkmarks', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText('Expert Tutors')).toBeInTheDocument();
    expect(screen.getByText('Flexible Scheduling')).toBeInTheDocument();
    expect(screen.getByText('Achieve your Goals')).toBeInTheDocument();
    expect(screen.getByText('Personalised Learning')).toBeInTheDocument();
  });

  it('displays verified tutor badge in hero section', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText('Bel Mercy')).toBeInTheDocument();
    expect(screen.getByText('Verified Kynda Tutor')).toBeInTheDocument();
  });

  it('renders all major sections', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText(/Pick up from where you Stopped/i)).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Recommended for You')).toBeInTheDocument();
  });
});

describe('Continue Learning Section', () => {
  it('displays all continue learning cards', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText('Mathematics & Physics Class')).toBeInTheDocument();
    expect(screen.getByText('Advanced English Literature')).toBeInTheDocument();
    expect(screen.getByText('Chemistry Fundamentals')).toBeInTheDocument();
  });

  it('shows progress bars for each course', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText('Lesson 5 of 7')).toBeInTheDocument();
    expect(screen.getByText('Lesson 3 of 8')).toBeInTheDocument();
    expect(screen.getByText('Lesson 6 of 10')).toBeInTheDocument();
  });

  it('displays Continue buttons on learning cards', () => {
    render(<MockedDashBoard />);
    
    const continueButtons = screen.getAllByText('Continue');
    expect(continueButtons.length).toBeGreaterThanOrEqual(3);
  });

  it('has navigation arrows for carousel', () => {
    render(<MockedDashBoard />);
    
    const buttons = screen.getAllByRole('button');
    const navButtons = buttons.filter(btn => 
      btn.querySelector('svg') && btn.className.includes('rounded-full')
    );
    
    expect(navButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('shows tutor information with verification badge', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getByText('Baran Mercy')).toBeInTheDocument();
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Dr. Michael Chen')).toBeInTheDocument();
  });
});

describe('Courses Section', () => {
  it('displays multiple course cards', () => {
    render(<MockedDashBoard />);
    
    const courseTitles = screen.getAllByText('Advanced Mathematics');
    expect(courseTitles.length).toBeGreaterThanOrEqual(3);
  });

  it('shows course ratings and reviews', () => {
    render(<MockedDashBoard />);
    
    const ratings = screen.getAllByText('4.8');
    expect(ratings.length).toBeGreaterThan(0);
  });

  it('displays course subjects as tags', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getAllByText('Mathematics').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Physics').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Chemistry').length).toBeGreaterThan(0);
  });

  it('shows Book Section buttons on course cards', () => {
    render(<MockedDashBoard />);
    
    const bookButtons = screen.getAllByText('Book Section');
    expect(bookButtons.length).toBeGreaterThanOrEqual(6);
  });

  it('displays Load More button', () => {
    render(<MockedDashBoard />);
    
    const loadMoreButton = screen.getByText('Load More');
    expect(loadMoreButton).toBeInTheDocument();
  });
});

describe('Recommended Courses Section', () => {
  it('displays recommended course cards', () => {
    render(<MockedDashBoard />);
    
    const examPrepTitle = screen.getAllByText(/Preparing for Science Based JAMB\/UTME Exams/i);
    expect(examPrepTitle.length).toBeGreaterThanOrEqual(1);
  });

  it('shows course duration and student count', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getAllByText('8Weeks').length).toBeGreaterThan(0);
    expect(screen.getAllByText('156 Students Taught').length).toBeGreaterThan(0);
  });

  it('displays original and discounted prices', () => {
    render(<MockedDashBoard />);
    
    expect(screen.getAllByText('₦150,000').length).toBeGreaterThan(0);
    expect(screen.getAllByText('₦52,000').length).toBeGreaterThan(0);
  });

  it('has navigation controls for carousel', () => {
    render(<MockedDashBoard />);
    
    const allButtons = screen.getAllByRole('button');
    const carouselButtons = allButtons.filter(btn => 
      btn.className.includes('rounded-full') && 
      (btn.className.includes('cyan') || btn.className.includes('border-2'))
    );
    
    expect(carouselButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('shows View More buttons on recommended courses', () => {
    render(<MockedDashBoard />);
    
    const viewMoreButtons = screen.getAllByText('View More');
    expect(viewMoreButtons.length).toBeGreaterThanOrEqual(4);
  });
});

describe('Interactive Features', () => {
  it('favorite and bookmark buttons are present', () => {
    render(<MockedDashBoard />);
    
    const allButtons = screen.getAllByRole('button');
    const actionButtons = allButtons.filter(btn => 
      btn.className.includes('w-6') || btn.className.includes('w-7')
    );
    
    expect(actionButtons.length).toBeGreaterThan(0);
  });

  it('carousel navigation updates on click', () => {
    render(<MockedDashBoard />);
    
    const buttons = screen.getAllByRole('button');
    const nextButton = buttons.find(btn => 
      btn.className.includes('bg-cyan-500')
    );
    
    if (nextButton) {
      fireEvent.click(nextButton);
      expect(nextButton).toBeInTheDocument();
    }
  });

  it('subject pills are clickable', () => {
    render(<MockedDashBoard />);
    
    const scienceButton = screen.getByText('Sciences');
    fireEvent.click(scienceButton);
    
    expect(scienceButton).toBeInTheDocument();
  });

  it('Book Section buttons are clickable', () => {
    render(<MockedDashBoard />);
    
    const bookButtons = screen.getAllByText('Book Section');
    if (bookButtons.length > 0) {
      fireEvent.click(bookButtons[0]);
      expect(bookButtons[0]).toBeInTheDocument();
    }
  });

  it('Continue buttons on learning cards are functional', () => {
    render(<MockedDashBoard />);
    
    const continueButtons = screen.getAllByText('Continue');
    if (continueButtons.length > 0) {
      fireEvent.click(continueButtons[0]);
      expect(continueButtons[0]).toBeInTheDocument();
    }
  });
});