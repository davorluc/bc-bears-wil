// Mantine Imports
import {Anchor, AspectRatio, Blockquote, Box, Grid, Group, Image, NavLink, Text, ThemeIcon, Title} from "@mantine/core";

// Image Imports
import logo from "../../media/wil_basktetball_small.png";

// Icons Imports here
import {Mail, WorldWww, BrandInstagram, BrandFacebook } from 'tabler-icons-react';

// Style import
import './index.css'

const Footer = () => {

    return (
        <div className='footer'>
            <Grid justify={'center'} align={'center'} mx={'xl'} py={'xl'}>
                <Grid.Col md={4} sm={6} align={'left'} ml={'xl'}>
                    <AspectRatio ratio={2000/2189} maw={'30%'} my={'sm'}>
                        <Anchor href={'https://www.bcbears.ch'}>
                            <Image
                                src={logo}
                                height={'100%'}
                                mx={'lg'}
                                my={'xs'}
                            />
                        </Anchor>
                    </AspectRatio>
                    <Title order={2} my={'xl'} align={'left'}>BC BEARS WIL</Title>
                    <Text align={'left'}>
                        <Anchor href={'mailto:bcbear-wil@bluewin.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
                            <ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
                                <Mail/>
                            </ThemeIcon>
                            bcbears-wil@bluewin.ch
                        </Anchor>
                    </Text>
                    <Text align={'left'}>
                        <Anchor href={'https://www.bcbears.ch'} underline={false} mx={'2px'} c={'black'} weight={700}>
                            <ThemeIcon mr={'xs'} variant={'outline'} c={'black'}>
                                <WorldWww />
                            </ThemeIcon>
                            www.bcbears.ch
                        </Anchor>
                    </Text>
                </Grid.Col>
                <Grid.Col md={3} sm={3} mx={'lg'} align={'left'}>
                    <Title order={2} ml={'sm'}>SITEMAP</Title>
                    <Box w={'100%'}>
                        <NavLink
                            label={'Home'}
                            c={'black'}
                            component={'a'}
                            href={'/'}
                            sx={() => ({
                                '&:hover': {
                                    backgroundColor: '#E6F9E6',
                                }})
                            }>
                        </NavLink>
                        <NavLink
                            label={'Verein'}
                            childrenOffset={'lg'}
                            c={'black'}
                            component={'a'}
                            href={'/verein'}
                            sx={() => ({
                                '&:hover': {
                                    backgroundColor: '#E6F9E6',
                                }})
                            }>
                            <NavLink
                                label={'Geschichte'}
                                c={'black'}
                                component={'a'}
                                href={'/verein/geschichte'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Vorstand'}
                                c={'black'}
                                component={'a'}
                                href={'/verein/vorstand'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Trainer/innen'}
                                c={'black'}
                                component={'a'}
                                href={'verein/trainer'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Hallen'}
                                c={'black'}
                                component={'a'}
                                href={'verein/hallen'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Mitglied werden'}
                                c={'black'}
                                component={'a'}
                                href={'/verein/neumitglied'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                        </NavLink>
                        <NavLink
                            label={'Teams'}
                            childrenOffset={'lg'}
                            c={'black'}
                            component={'a'}
                            href={'/teams'}
                            sx={() => ({
                                '&:hover': {
                                    backgroundColor: '#E6F9E6',
                                }})
                            }>
                            <NavLink
                                label={'Mix U10'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/mixu10'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Mix U12'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/mixu12'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Herren U14'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/herrenu14'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Damen U14'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/damenu14'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Herren U16'}
                                c={'black'}
                                component={'a'}
                                href={'herrenu16'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Herren U18'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/herrenu18'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Herren 2. Liga'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/herren3'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                            <NavLink
                                label={'Herren 4. Liga'}
                                c={'black'}
                                component={'a'}
                                href={'/teams/herren4'}
                                sx={() => ({
                                    '&:hover': {
                                        backgroundColor: '#E6F9E6',
                                    }})
                                }>
                            </NavLink>
                        </NavLink>
                        <NavLink
                            label={'Partner & Gönner'}
                            c={'black'}
                            component={'a'}
                            href={'partners'}
                            sx={() => ({
                                '&:hover': {
                                    backgroundColor: '#E6F9E6',
                                }})
                            }>
                        </NavLink>
                        <NavLink
                            label={'Shop'}
                            c={'black'}
                            component={'a'}
                            href={'/shop'}
                            sx={() => ({
                                '&:hover': {
                                    backgroundColor: '#E6F9E6',
                                }})
                            }>
                        </NavLink>
                    </Box>
                    <Group my={'xs'}>
                        <Anchor href={'https://www.instagram.com/bc_bears_wil/'} c={'#E6F9E6'}>
                            <ThemeIcon c={'#189940'} variant={'light'} size={'xl'} radius={'md'}>
                                <BrandInstagram/>
                            </ThemeIcon>
                        </Anchor>
                        <Anchor href={'https://www.facebook.com/BasketballClubBearsWil/'}>
                            <ThemeIcon c={'#189940'} variant={'light'} size={'xl'} radius={'md'}>
                                <BrandFacebook
                                    strokeWidth={1.5}/>
                            </ThemeIcon>
                        </Anchor>
                    </Group>
                </Grid.Col>
                <Grid.Col md={4} sm={6}>
                    <Box align={'center'}>
                        <Blockquote cite={'- Miodrag Manojlovic, Vereinspräsident BC Bears Wil'}>
                            Ein Sport, Eine Leidenschaft, Eine Familie
                        </Blockquote>
                    </Box>
                </Grid.Col>
            </Grid>
            <Title order={4} align={'center'}>&copy; 2023 BC Bears Wil</Title>
            <Text align={'center'} size={'sm'}>Engineering and Design by</Text>
            <Text align={'center'} pb={'lg'}><Anchor c={'black'} href={'https://github.com/davorluc'} underline={false}>Davor Lucic</Anchor> and <Anchor href={'https://github.com/FadilSmajilbasic'} underline={false} c={'black'}>Fadil Smajilbasic</Anchor></Text>
        </div>
    )
}

export default Footer;
