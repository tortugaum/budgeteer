import styled from 'styled-components';

export const ReportsContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background}; // Light Gray
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReportSection = styled.section`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary}; // Calm Blue
`;

export const ReportList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReportItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text}; // Dark Slate
  color: ${({ theme }) => theme.colors.text}; // Dark Slate
`;

export const Total = styled.h3`
  color: ${({ theme }) => theme.colors.accent}; // Mint Green
`;
