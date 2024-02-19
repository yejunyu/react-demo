const Course = ({course}) => {
    const parts = course.parts
    return (
      <div>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map(l=><li key={l.id}>
            {l.name} {l.exercises}
          </li>)}
        </ul>
        <h3>total of {parts.reduce((acc,parts)=>acc+parts.exercises,0)} exercises</h3>
      </div>
    )
  }

export default Course