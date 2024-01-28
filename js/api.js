//sign up

async function signUp(username, password) {
  const response = await axios.post(
    'https://3yya.com/u/e539865f733cc191/bbs/app/users',
    {
      username: username,
      password: password,
    }
  )
  console.log(response)
}

//sign in

async function signIn(username, password) {
  const response = await axios.post(
    'https://3yya.com/u/e539865f733cc191/bbs/app/tokens',
    {
      username: username,
      password: password,
    }
  )
  console.log(response)
}
