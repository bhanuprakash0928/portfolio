test('renders name', () => {
  render(<App />);
  const element = screen.getByText(/Bhanu Prakash Reddy/i);
  expect(element).toBeInTheDocument();
});