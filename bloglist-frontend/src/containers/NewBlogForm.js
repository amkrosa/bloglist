import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogActions'
import { setNotification } from '../actions/notificationActions'

import Form from '../components/Form'
import InputField from '../components/InputField'

import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3)
  }
}));

const NewBlogForm = (props) => {

  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [url, setUrl] = useState('')

  const submit = e => {
    e.preventDefault()
    const newBlog = {
      title,
      author: props.user.name,
      content,
      url,
      user: props.user.username
    };
    try{
      props.addBlog(newBlog)
      props.setNotification('Blog succesfully added', 'success')
    }catch (e){
      console.error(e)
      props.setNotification('An error has occured', 'error')
    }
  }

  return (
    <Form onSubmit={submit}>
    <InputField
              label="Title"
              icon="title"
              value={title}
              onChange={({target})=>setTitle(target.value)}
            />
            <InputField
              label="Content"
              icon="subject"
              value={content}
              onChange={({target})=>setContent(target.value)}
            />
            <InputField
              label="URL"
              icon="link"
              value={url}
              onChange={({target})=>setUrl(target.value)}
            />
              <Button
                className={classes.item}
                variant="contained"
                color="primary"
                type="submit">
                submit
              </Button>
            </Form>
  )
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  addBlog,
  setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogForm)