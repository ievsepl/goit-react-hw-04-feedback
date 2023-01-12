// import PropTypes from 'prop-types';
import Box from '../Box/Box';

const FeedbackOpt = ({ onChoiceFeedback, options }) => {
  // console.log(good);
  return (
    <Box
      display="flex"
      // justifyContent="space-around"
      // width="50%"
      // alignItems="center"
      // gridRowGap="10 px"
    >
      {options.map(({ id }) => {
        return (
          <Box ml="10px" key={id}>
            <button
              type="button"
              name={id}
              onClick={() => onChoiceFeedback(id)}
            >
              {id.slice(0, 1).toUpperCase() + id.slice(1, id.length)}
            </button>
          </Box>
        );
      })}
    </Box>
  );
};
export default FeedbackOpt;

// FeedbackOpt.propTypes = {
//   onChoiceFeedback: PropTypes.func.isRequired,
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
