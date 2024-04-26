import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks";

const formData = {
  name: '',
  email: '',
  password: ''
}


export const RegisterPage = () => {

  
  const { name, email, password, onInputChange, formState } = useForm(formData)


  const onSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your name"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@foo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Have already an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
