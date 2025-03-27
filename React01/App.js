import logo from './logo.svg';
import './App.css';

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}

function Header(props) {
  return <header>
  <h1><a href="/" onClick={function(event){
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const list= []
    for(let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        list.push(<li key={t.id}>
          <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(event.target.id);
          }}>{t.title}</a>
          </li>)
    }

  return <nav>
  <ol>
    {list}
  </ol>
  </nav>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...' },
    {id:2, title:'css', body:'css is ...' },
    {id:3, title:'js', body:'js is ...' }
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div>
    <Header title="WEB" onChangeMode={()=>{
      setMode('WELCOME');
    }}></Header>
    <Nav topics={topics} onChangeMode={(id)=>{
      setMode('READ');
      setId(_id);
    }}></Nav>
      {content}
    </div>
  );
}

export default App;
