import PropTypes from 'prop-types';
// import { Sect } from './Section.styled';
import Box from '../Box/Box';

const Section = ({ title, children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexDirection="column"
      width="50%"
      alignItems="center"
      as="section"
    >
      <Box color="red" as="h2">
        {title}
      </Box>
      {children}
    </Box>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
