import styles from './work.module.scss'
import Project from './project';

export default function Home() {

  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg"
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg"
    }
  ]

  return (
    <main className={styles.main} id='work'>
      <div className={styles.gallery}>
        <p className=' text-4xl lg:text-6xl py-10 pt-24 p-5'>Featured Work</p>
          {
            projects.map( project => {
              return <Project key={""} project={project}/>
            })
          }
      </div>
    </main>
  )
}