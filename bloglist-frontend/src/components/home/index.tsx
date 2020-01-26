import { connect } from 'react-redux';
import {
  getBlogsMostPopular,
  getBlogsRecentlyAdded,
} from '../../store/blog/blogActions';
import Home from './Home';

const mapStateToProps = (state: any) => {
  return {
    blogsMostPopular: getBlogsMostPopular(state, 3),
    blogsRecentlyAdded: getBlogsRecentlyAdded(state, 3),
    pending: state.blogs.pending,
  };
};

export default connect(mapStateToProps)(Home);
