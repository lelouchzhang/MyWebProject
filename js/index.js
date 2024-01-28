const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const forms = {
  signUpUsername: document.getElementById(
    'sign-up-username'
  ),
  signUpEmail: document.getElementById('sign-up-email'),
  signUpPassword: document.getElementById(
    'sign-up-password'
  ),
  signInUsername: document.getElementById(
    'sign-in-username'
  ),
  signInPassword: document.getElementById(
    'sign-in-password'
  ),
  buttonSignIn: document.getElementById('sign-in'),
  buttonSignUp: document.getElementById('sign-up'),
}

registerBtn.addEventListener('click', () => {
  container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active')
})

forms.buttonSignIn.addEventListener('click', (e) => {
  const username = forms.signInUsername.value
  const password = forms.signInPassword.value
  console.log(username, password)

  e.preventDefault()
  signIn(username, password)
})
forms.buttonSignUp.addEventListener('click', (e) => {
  const username = forms.signUpUsername.value
  const password = forms.signUpPassword.value
  console.log(username, password)

  e.preventDefault()
  signUp(username, password)
})
