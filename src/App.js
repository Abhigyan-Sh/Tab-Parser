

function App() {
  const styles = {
    iconCover: 'flex bg-black',
    bg_icon: 'bg-rose-300 m-2 p-2 flex flex-col items-center justify-center rounded',
  }
  const shortCutList = [
    {
      name: 'pryansh0321',
      logoIcon: 'https://cdn-icons-png.flaticon.com/512/281/281769.png',
      url: 'https://mail.google.com/mail/u/0/#inbox'
    },
    {
      name: 'abhi09',
      logoIcon: 'https://cdn-icons-png.flaticon.com/512/281/281769.png',
      url: 'https://mail.google.com/mail/u/1/#inbox'
    },
    {
      name: 'youtube',
      logoIcon: 'https://www.google.com/s2/favicons?sz=32&domain_url=youtube.com',
      url: 'https://www.youtube.com/'
    },
  ]
  const openTab = (url) => {
    window.open(url)
  }
  return (
    <div className= {styles.iconCover}>
      {shortCutList.map((e, i) => {
        return (
          <div key= {i} className= {styles.bg_icon} onClick={() => openTab(e.url)}>
          {/* <div key= {i} className= {styles.bg_icon} onClick={(e) => openTab(e.url)}> totally wrong obvious reasons */} 
            <img src={e.logoIcon} className='w-4 h-4'/>
            <p>{e.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
