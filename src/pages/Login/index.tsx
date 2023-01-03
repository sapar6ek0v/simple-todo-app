import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Label, LoginCard, Stack, Wrapper } from './styles'

const Login: FC = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) return;

    setAuth(username);
    setUsername('');
    setPassword('');
    navigate(`/todos`);
  };

  return (
    <Wrapper>
      <LoginCard>
        <form onSubmit={handleSubmit}>
          <Stack gap={20}>
            <Stack gap={5}>
              <Label htmlFor='username'>Login</Label>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type='text'
                name='username'
                autoComplete='off'
              />
            </Stack>
            <Stack gap={5}>
              <Label htmlFor='password'>Password</Label>
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type='password'
                name='password'
                autoComplete='off'
              />
            </Stack>

            <Button type='submit' disabled={!username || !password}>Login</Button>
          </Stack>
        </form>
      </LoginCard>
    </Wrapper>
  )
}

export default Login