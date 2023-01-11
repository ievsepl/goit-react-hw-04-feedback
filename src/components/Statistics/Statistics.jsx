import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <Box ml="30px" display="flex" flexDirection="column">
      <span>
        Good:
        <Box color="red" as="span">
          {good}
        </Box>
      </span>
      <span>
        Neutral:
        <Box color="red" as="span">
          {neutral}
        </Box>
      </span>
      <span>
        Bad:
        <Box color="red" as="span">
          {bad}
        </Box>
      </span>
      <span>
        total:
        <Box color="red" as="span">
          {total}
        </Box>
      </span>
      <span>
        Positive feedback :
        <Box color="red" as="span">
          {Math.round(positivePercentage)}%
        </Box>
      </span>
    </Box>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
