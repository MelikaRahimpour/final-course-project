import {Banner, Section} from "@/components";

export default function Home() {
    return(
        <>
            <Section className={'mb-[75px]'}>
                <Banner title={'Don’t miss amazing grocery deals'}
                subtitle={"Sign up for the daily newsletter"}
                bgImage={"/assets/images/banner_bg.png"}
                image={'/assets/images/fresh-apples.png'}/>
            </Section>
        </>
    )
}
