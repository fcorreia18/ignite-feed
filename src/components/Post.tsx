interface PostProps{
    author:string
    content:string
}

export const Post: React.FC<PostProps> = ({author, content})=>{
    return(
        <div>
            <strong><p>{author}</p></strong>
            <p>{content}</p>
        </div>
    )
}
