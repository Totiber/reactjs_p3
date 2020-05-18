import React, { Component } from 'react'

class Post extends Component {

    state = {
        posts : []
    }

    async componentDidMount() {

        const res = await fetch('https://reqres.in/api/users?page=2&fbclid=IwAR09rHYwK3jzrJfl7RU8tT9lxiH2hkp6c6-wFpLeEucDOA90zb195OfG0c8')
        const {data} = await res.json();
        this.setState({posts : data})
    }

    render() {
        return (
            <div>
                <h1>POST</h1>
                {
                    this.state.posts.map(post => {

                        return <div key = {post.id}>
                                    <h1>{post.first_name}</h1>
                                    <p>{post.email}</p>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default Post;
