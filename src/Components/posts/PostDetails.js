

export default function PostDetails(props) {
    // console.log(props);
    let {location: {state}} = props

  return (
      <div>

          {state.title &&<><h2>{state.id}-{state.title}</h2>
              <h3> {state.body}</h3> </>}

      </div>
  )

}