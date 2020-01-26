import BlogSingle from './BlogSingle';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addVote, deleteBlog } from '../../../../store/blog/blogActions';

const mapDispatchToProps = {
  addVote,
  deleteBlog,
};

//deleted withRouter
export default connect(null, mapDispatchToProps)(BlogSingle);
