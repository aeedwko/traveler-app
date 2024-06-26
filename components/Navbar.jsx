import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import MapIcon from '@mui/icons-material/Map';
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/">
          <ExploreIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ paddingRight: 2 }}>
          <Link href="/">WanderQuest</Link>
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }} component="div">
          <Button color="inherit" href="/popular-routes">Popular Routes</Button>
          <Button color="inherit" href="/locations">Popular Locations</Button>
          {session?.user && (<Button color="inherit" href="/dashboard">Dashboard</Button>)}          
        </Stack>
        <Stack direction="row" spacing={2}>
          {session?.user ? (
            <>
              <Button 
                variant="outlined" 
                color="inherit" 
                href="/routes/create"
                startIcon={<MapIcon/>}
              >Create Route</Button>
              <Button color="inherit" href="/account">Account</Button>
              <LogoutButton />
            </>
          ) : (
            <>
              <Button color="inherit" href="/login">Login</Button>
              <Button color="inherit" href="/register">Register</Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;