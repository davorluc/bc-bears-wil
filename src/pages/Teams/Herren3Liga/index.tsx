// React imports
import { useState } from 'react';
// Mantine Imports
import {
    Title,
    Image,
    Grid,
    Container,
    Divider,
    Overlay,
    Box,
    Card,
    Space, AspectRatio, Group, Text, Badge
} from '@mantine/core';

// Image imports
import team from '../../../media/teams/senioren.jpg';
import person from '../../../media/portraits/miki.jpeg';
import ebnet from '../../../media/hallen/ebnet.jpg';
import kanti from '../../../media/hallen/kanti.jpg'

// Stylesheet import
import './index.css';

function Herren3 () {
    const [halleEbnet, setHalleEbnet] = useState(true);
    const [halleKanti, setHalleKanti] = useState(true);
    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <Box
                    mx={'7%'}
                    c={'white'}
                    my={'xl'}
                    sx={() => ({
                        backgroundColor: '#189940',
                        borderRadius: '7px'})
                    }>
                    <Title mx={'xl'} order={1}>Herren 2. Liga</Title>
                </Box>
                <div className={'team-infos'}>
                    <Container my={'lg'}>
                        <Image
                            src={team}
                            height={'100%'}
                            />
                    </Container>
                </div>
                <Divider m={'xl'}/>
                <div className={'staff'}>
                    <Box
                        mx={'7%'}
                        c={'white'}
                        my={'xl'}
                        sx={() => ({
                            backgroundColor: '#189940',
                            borderRadius: '7px'})
                    }>
                        <Title mx={'xl'} order={2}>Trainer</Title>
                    </Box>
                    <Grid mx={'8%'}>
                        <Grid.Col sm={3}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={600/800}>
                                        <Image
                                            src={person}
                                        />
                                    </AspectRatio>
                                    <Group position={'apart'} mx={'md'} my={'xs'}>
                                        <Title c={'#189940'} order={4}>Miodrag Manojlovic</Title>
                                        <Badge color={'green'} variant={'light'}>
                                            Herren 2. Liga
                                        </Badge>
                                    </Group>
                                    <Text mx={'lg'} c={'dimmed'}>*Email*</Text>
                                    <Text mx={'lg'} mb={'md'} c={'dimmed'}>*Nummer*</Text>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
                <Divider m={'xl'}/>
                <div className={'training-infos'}>
                    <Box
                        mx={'7%'}
                        c={'white'}
                        my={'xl'}
                        sx={() => ({
                            backgroundColor: '#189940',
                            borderRadius: '7px'})
                        }>
                        <Title mx={'xl'} order={2}>Zeit und Ort der Trainings</Title>
                    </Box>
                    <Grid mx={'8%'}>
                        <Grid.Col sm={4}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={1000/500} onClick={() => setHalleEbnet((v) => !v)}>
                                        <Image
                                            src={ebnet}
                                            fit={'fill'}
                                        />
                                        {!halleEbnet && <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.748475427073!2d9.03378445!3d47.475330699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aeb92221f5eab%3A0xfdd9243307a78e58!2sEbnet-Saal%2C%20Industriestrasse%202%2C%209552%20Bronschhofen%2C%20Switzerland!5e0!3m2!1sen!2shr!4v1690835404168!5m2!1sen!2shr"referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </AspectRatio>
                                    <Group position={'apart'} m={'md'}>
                                        <Title c={'#189940'} order={4}>Ebnet Saal, Bronschhofen</Title>
                                        <Badge color={'green'} variant={'light'}>
                                            Dienstag, 20:30 - 22:00
                                        </Badge>
                                        <Text color={'dimmed'}>Industriestrasse 2, 9552 Bronschhofen, Schweiz</Text>
                                    </Group>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <Card shadow={'md'} radius={'md'} mb={'xl'}>
                                <Card.Section>
                                    <AspectRatio ratio={1000/500} onClick={() => setHalleKanti((v) => !v)}>
                                        <Image
                                            src={kanti}
                                            fit={'fill'}
                                        />
                                        {!halleKanti && <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5236597753797!2d9.030890475728803!3d47.4602240711768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aebb88cc4d3db%3A0x13891633e5ba315a!2sKantonsschule%20Wil!5e0!3m2!1sen!2shr!4v1690914619557!5m2!1sen!2shr" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </AspectRatio>
                                    <Group position={'apart'} m={'md'}>
                                        <Title c={'#189940'} order={4}>Kantonsschule Wil, Wil SG</Title>
                                        <Badge color={'green'} variant={'light'}>
                                            Freitag, 20:30 - 22:00
                                        </Badge>
                                        <Text color={'dimmed'}>Hubstrasse 75, 9501 Wil, Schweiz</Text>
                                    </Group>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Herren3;
