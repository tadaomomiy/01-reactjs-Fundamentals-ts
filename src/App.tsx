import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tadaomomiy.png',
      name: 'Matheus Tadao Momiy',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-12-06 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maiconmaul.png',
      name: 'Maicon Santos',
      role: 'IOS developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifõlio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-12-04 21:00:00'),
  }
]

export function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
        </div>
      </div>
    )
}
