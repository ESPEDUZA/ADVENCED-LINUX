import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CommentsList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
            });
    }, []);

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>{comment.name}</li>
            ))}
        </ul>
    );
}

export default CommentsList;