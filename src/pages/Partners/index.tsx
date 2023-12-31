// Mantine imports
import { Space,
    Text,
    Grid,
    Container,
    Stack,
    Title,
    Box,
    Divider,
    Image
} from '@mantine/core'

// Image imports
import dieMobiliar from '../../media/sponsors/die_mobiliar.jpeg'
import munishi from '../../media/sponsors/munishi_logo.jpeg'
import hederavita from '../../media/sponsors/hederavita.png'
import stilmat from '../../media/sponsors/stilmat-logo-ch.png'
import tgazajug from '../../media/sponsors/tga_za_jug.jpeg'
import konsens from '../../media/sponsors/konsens_logo.png'

function Partners () {
    const mainSponsor = [
    { image: munishi, text: 'Sponsorbeschreibung', link:'https://munishi.ch' },
    ];

    const silver = [
    { image: dieMobiliar, text: 'Sponsorenbeschreibung', link: 'https://www.mobiliar.ch'}
    ];

    const bronze = [
    { image: tgazajug, text: 'Sponsorenbeschreibung', link:'https://www.tgazajug.com' },
    { image: stilmat, text: 'Sponsorenbeschreibung', link:'https://stilmat.com/de' }
    ];

    const medical = [
    { image: hederavita, text: 'Sponsorenbeschreibung', link:'https://hederavita.ch' },
    { image: konsens, text: 'Sponsorenbeschreibung', link:'https://kon-sens.com' }
    ];

    const mainSponsorContent = mainSponsor.map((entry) => (
        <Stack component='a' href={entry.link}>
            <Image my='xl' mx='9%' src={entry.image} maw='200px'/>
            <Text mb='xl' mx='9%'>{entry.text}</Text>
        </Stack>
        ));

    const silverSponsorContent = silver.map((entry) => (
        <Stack component='a' href={entry.link}>
            <Image my='xl' mx='9%' src={entry.image} maw='200px'/>
            <Text mb='xl' mx='9%'>{entry.text}</Text>
        </Stack>
        ));

    const bronzeSponsorContent = bronze.map((entry) => (
        <Stack component='a' href={entry.link}>
            <Image my='xl' mx='9%' src={entry.image} maw='200px'/>
            <Text mb='xl' mx='9%'>{entry.text}</Text>
        </Stack>
        ));

    const medicalSponsorContent= medical.map((entry) => (
        <Stack component='a' href={entry.link}>
            <Image my='xl' mx='9%' src={entry.image} maw='200px'/>
            <Text mb='xl' mx='9%'>{entry.text}</Text>
        </Stack>
        ));

    return (
            <div>
                <div className="main">
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
                        <Title mx={'xl'} order={1}>Sponsoren</Title>
                    </Box>
                    <div className='main-sponsors'>
                        <Title order={1} c='#189940' mx='8%'>Hauptsponsoren</Title>
                        {mainSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                        <Title order={1} c='#189940' mx='8%'>Silber</Title>
                        {silverSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                    <Title order={1} c='#189940' mx='8%'>Silber</Title>
                        {bronzeSponsorContent}
                    </div>
                    <Divider m='xl'/>
                    <div className='main-sponsors'>
                    <Title order={1} c='#189940' mx='8%'>Medical</Title>
                        {medicalSponsorContent}
                    </div>
                </div>
            </div>
           );
}

export default Partners;
