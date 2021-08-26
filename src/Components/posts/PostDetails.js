

export default function PostDetails(props) {

  let {location: {state}} = props

  return (
      <div>

            <h2>{state.id}-{state.title}</h2>
             <ul><li>{state.body}</li></ul>

      </div>
  )

}