import { initializeBlogs } from '../../../../store/blog/blogActions';
import { connect } from 'react-redux';
import BlogList from './BlogList';

const mapStateToProps = (state: any) => {
  return {
    blogs: state.blogs.blogs,
    pending: state.blogs.pending,
  };
};
const mapDispatchToProps = {
  initializeBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
