

export default function User({item,history}) {
  const navigaTor = () => {
    history.push(`/users/${item.id}`)
  }
  return (
    <div className={'user'}>
      <h4>{item.name} <button className={'button'} onClick={navigaTor}>go to details</button></h4>

    </div>
  );
}