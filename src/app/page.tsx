import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Typography variant="h1"> Hello world!</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper>
          <Typography variant="h2">Mydata1</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam
            sed metus lobortis mollis in eget eros. Morbi porta, odio vehicula
            rutrum consequat, felis massa egestas dolor, eget elementum augue
            lectus ac enim. Sed pulvinar congue enim eget aliquet. Ut eget
            vulputate quam. Aenean at consectetur tortor.
          </Typography>
          <Button variant="contained">read more...</Button>
        </Paper>
        <Paper>
          <Typography variant="h2">Mydata2</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam
            sed metus lobortis mollis in eget eros. Morbi porta, odio vehicula
            rutrum consequat, felis massa egestas dolor, eget elementum augue
            lectus ac enim. Sed pulvinar congue enim eget aliquet. Ut eget
            vulputate quam. Aenean at consectetur tortor.
          </Typography>
          <Button variant="contained">read more...</Button>
        </Paper>
        <Paper>
          <Typography variant="h2">Mydata3</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam
            sed metus lobortis mollis in eget eros. Morbi porta, odio vehicula
            rutrum consequat, felis massa egestas dolor, eget elementum augue
            lectus ac enim. Sed pulvinar congue enim eget aliquet. Ut eget
            vulputate quam. Aenean at consectetur tortor.
          </Typography>
          <Button variant="contained">read more...</Button>
        </Paper>
      </Box>
      <Copyright />
    </Container>
    // <Container maxWidth="lg">
    //   <Box
    //     sx={{
    //       my: 4,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Typography variant="h1" sx={{ mb: 2 }} color="primary">
    //       Material UI - Next.js App Router example in TypeScript
    //     </Typography>
    //     <Link href="/about" color="secondary" component={NextLink}>
    //       Go to the about page
    //     </Link>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
