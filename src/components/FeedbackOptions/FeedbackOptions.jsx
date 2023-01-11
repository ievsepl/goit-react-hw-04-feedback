import PropTypes from 'prop-types';
import Box from '../Box/Box';

const FeedbackOpt = ({ onChoiceFeedback, options }) => {
  return (
    <Box
      display="flex"
      // justifyContent="space-around"
      // width="50%"
      // alignItems="center"
      // gridRowGap="10 px"
    >
      {options.map(option => {
        return (
          <Box ml="10px" key={option}>
            <button type="button" onClick={onChoiceFeedback}>
              {option.slice(0, 1).toUpperCase() +
                option.slice(1, option.length)}
            </button>
          </Box>
        );
      })}
    </Box>
  );
};
export default FeedbackOpt;

FeedbackOpt.propTypes = {
  onChoiceFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
