import useStore from '../helpers/stateManagement';

export default function Layout({ children }) {
  const { selectPosition } = useStore();

  return (
    <>
      <div>
        <button
          className='text-3xl font-bold underline'
          onClick={() => selectPosition('home')}
          style={{ padding: 18, margin: 18 }}
        >
          App Name
        </button>
        <button
          onClick={() => selectPosition('views')}
          style={{ padding: 18, margin: 18 }}
        >
          Views
        </button>
        <button
          onClick={() => selectPosition('first')}
          style={{ padding: 18, margin: 18 }}
        >
          First
        </button>
        <button
          onClick={() => selectPosition('second')}
          style={{ padding: 18, margin: 18 }}
        >
          Second
        </button>
        <button
          onClick={() => selectPosition('third')}
          style={{ padding: 18, margin: 18 }}
        >
          Third
        </button>
        <main>{children}</main>
      </div>
    </>
  );
}
