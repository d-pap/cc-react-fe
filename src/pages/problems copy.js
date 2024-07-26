// import React, { useEffect, useState } from "react"
// import { fetchProblems } from "../api"

// const Problems = () => {
//   const [problems, setProblems] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const getProblems = async () => {
//       try {
//         setIsLoading(true)
//         const problemsData = await fetchProblems()
//         setProblems(problemsData)
//       } catch (error) {
//         console.error("Failed to fetch problems:", error)
//         setError("Failed to fetch problems. Please try again later.")
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     getProblems()
//   }, [])

//   if (isLoading) return <p>Loading problems...</p>
//   if (error) return <p>{error}</p>

//   return (
//     <div>
//       <h1>Problems</h1>
//       {problems.length > 0 ? (
//         <ul>
//           {problems.map((problem) => (
//             <li key={problem._id}>
//               <h2>{problem.title}</h2>
//               <p>{problem.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No problems found</p>
//       )}
//     </div>
//   )
// }

// export default Problems

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchProblems } from "../api"

function Problems() {
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getProblems() {
      try {
        const data = await fetchProblems()
        setProblems(data)
        setLoading(false)
      } catch (err) {
        setError("Error fetching problems")
        setLoading(false)
      }
    }
    getProblems()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Problems</h1>
      <h3>Select a problem to get started</h3>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <Link to={`/problems/${problem._id}`}>{problem.title}</Link>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Problems
