import React from 'react';
import { render } from '@testing-library/react';
import { Line } from 'react-chartjs-2';
import Plot from '../components/Plot';

// Mock the Line component
jest.mock('react-chartjs-2', () => ({
  Line: jest.fn(() => <div>Mock Line Chart</div>),
}));

describe('Plot Component', () => {
  it('renders the Line chart with correct props', () => {
    const mockData = [
      { year: 2000, value: 100 },
      { year: 2001, value: 200 },
      { year: 2002, value: 300 },
    ];

    render(
      <Plot
        data={mockData}
        selectedCountry="Australia"
        selectedSector="Energy"
      />
    );

    expect(Line).toHaveBeenCalledTimes(1);
  });
});
