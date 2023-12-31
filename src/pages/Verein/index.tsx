// React Imports
import React from "react";

// Mantine Imports
import {
    Grid,
    Image,
    AspectRatio,
    Space,
    Card,
    Title,
} from '@mantine/core';

// Stylesheets Import
import './index.css';

// Image Imports
import geschichte from '../../media/wil_basketball_small_cropped.png';
// import vorstand from
// import trainer from
// import hallen from
// import mitglied from

function Verein () {
    const vereinData = [
        { image: geschichte, title: 'Geschichte', link: '/verein/geschichte' },
        { image: geschichte, title: 'Vorstand', link: '/verein/vorstand' },
        { image: geschichte, title: 'TrainerInnen', link: 'verein/trainer' },
        { image: geschichte, title: 'Hallen', link: '/verein/hallen' },
        { image: geschichte, title: 'Mitglied werden', link: '/verein/neumitglied'}
    ];

    const renderVereinData = vereinData.map((entry) => (
        <Grid.Col md={4} sm={6}>
            <Card shadow={'sm'} radius={'md'} style={{backgroundColor: "#F0F0F0"}} component={'a'} href={entry.link}>
                <Card.Section p={'xl'}>
                    <AspectRatio ratio={2000/1797} p={'xl'}>
                        <Image
                            src={entry.image}
                            height={'100%'}
                            alt={'first'}
                            fit={'fill'}
                        />
                    </AspectRatio>
                    <Title m={'xl'} p={'xl'} align={'center'} order={2}>{entry.title}</Title>
                </Card.Section>
            </Card>
        </Grid.Col>
    ))

    return (
        <div>
            <div className={'main'}>
                <Space h={'xl'}/>
                <Space h={'xl'}/>
                <div className={'header'}>
                    <Title order={1} my={'xl'} mx={'7%'} c='#189940' align={'left'}>Verein</Title>
                </div>
                <div className={'verein-grid'}>
                    <Grid my={'xl'} align={'center'} justify={'center'} mx={'xl'} gutter={30}>
                        {renderVereinData}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Verein;
