import React from "react";
import { Link } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { styles } from "../../layout";
import Figure from "../components/figure";
import image1 from "./components/marathon/image1.png";
import image2 from "./components/marathon/image2.png";
import image3 from "./components/marathon/image3.png";
import image4 from "./components/marathon/image4.png";

import RunTable from "./components/table";

const NewSite: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>
        How to <em>not</em> train for and run a marathon
      </h1>
      <div style={styles.note}>Click here to watch this as a video</div>
      <p>
        I ran my first marathon on May 5 2024. It took me 4 hours and 16 minutes
        to run the full thing. Prior to this race I had never run even a half
        marathon or any competitive race besides middle school track where I was
        a sprinter. For some reason I had the conviction that I could run 26.2
        miles in less than 2 months of training.{" "}
      </p>
      <h2 style={styles.subHeader}>My Athletic History</h2>
      <p>
        I have played sports my entire life and have been no stranger to
        athletic challenges. I played soccer and baseball for the majority of my
        youth and played racquet sports like squash and tennis in middle and
        high school.{" "}
      </p>
      <p>
        During my sophomore year of high school, after being persuaded by my
        best friend I decided to try out for the water polo team. This was an
        extreme challenge to pick up and I was thrown into the fire almost
        immediately. 3-4 hours of preseason practices daily, with hours of
        swimming which I was not prepared for. I remember doing 1 lap, stopping
        to breath hysterically and repeating the process for weeks on end. I
        never gave up and was able to develop some swimming ability and play my
        first season. I quickly fell in love with he sport and was rookie of the
        year that first year, and by senior year I was team caption and a PA
        all-state player. For the first two years of college I was vice
        president of my club team at school for a few seasons.{" "}
      </p>
      <p>
        After my water polo career I felt like I needed a new challenge to take
        on and during my summer abroad in Spain I would do calisthenics workouts
        at a local park and started to do some longer distance runs to challenge
        myself. The longest of which was just over 11.5 miles. This gave me the
        confidence that a marathon was within reach, if I could run almost a
        half, with a little training a marathon would be a piece of cake (so I
        thought...). So I signed up for the Pittsburgh marathon on May 5 and did
        my first training run on March 5.{" "}
      </p>
      <Figure
        imageSrc={image1}
        altText="jack pearson athletics"
        caption="I like being active and was arrogant enough to think I could run a marathon"
        size="small"
        title="My previous athletic endevours"
      />
      <h2 style={styles.subHeader}>Adjusting my Diet</h2>
      <p>
        Prior to starting my first run I had actually been mentally prepping to
        begin training by adjusting my diet. I was eating healthy clean foods
        with tons of protein. I was eating lots of lean ground beef, rice, and
        avocado which became one of my favorite meals. I also was eating logs of
        chicken and salad, protein berry smoothies, yogurt, eggs, fruit, and all
        sorts of other food to help keep me in shape. This was one of things I
        felt like I did right in my training. Fueling my body with the right
        stuff to make my runs enjoyable.{" "}
      </p>
      <p>
        Before runs I would typically only have a banana and some honey, or many
        times just a spoonful (or 3) of honey. I also made sure to drink plenty
        of water to stay hydrated.{" "}
      </p>
      <Figure
        imageSrc={image2}
        altText="jack pearson marathon diet"
        caption="I loved ground beef, rice, and avocado. I would eat a pound almost every day."
        size="mini"
        title="Sample fuel during training"
      />
      <p>
        By the time I had started my first few weeks of marathon training I had
        gotten in pretty solid shape and was eating very healthy, but this
        proved not to be enough to carry me the full marathon.{" "}
      </p>
      <h2 style={styles.subHeader}>Training Plan</h2>
      <p>
        To be honest my training not but but my actual training was rushed and
        lackluster at best. I enlisted the help of Chat GPT to help me craft a
        training plan. I created a foolproof plan for 3-4 runs per week. I would
        do a short (3-5 miles) run, a medium (5-10 miles) run, and long run (10+
        miles) per week slowly ramping up the long runs for the first 6 weeks.{" "}
      </p>
      <p>
        By week #3 I had already run my first half marathon in under 2 hours and
        was still on track for my 4 hour marathon target. If only I had realized
        the difference between 13 and 26 miles.{" "}
      </p>
      <div style={styles.twitterEmbed}>
        <TwitterTweetEmbed tweetId="1772020627794223448" />
      </div>
      <p>
        I continued to train but was skipping the easy runs and would just try
        to lump them into the medium runs. This is where I fell short of my
        volume goals. I needed to be running more hours per week but I wasn’t.
        My total volume was 113 miles before my marathon. This is severely under
        what I should have been hitting. I should have been doing 40 mile weeks
        minimum.{" "}
      </p>
      <RunTable />
      <p>
        I was consistent however on pushing myself once per week on a long run
        over the weekend. I climbed up from 13 to 14 to 20 miles on my longest
        run. This is where I really felt the distance catch up to me. I remember
        crawling into bed from the shower after my 20 miles run. Regardless, I
        was signed up to run 6 miles father in just under 3 weeks so I had to
        taper down and get ready for race day. I went on a few more runs and was
        ready for race day!{" "}
      </p>
      <h2 style={styles.subHeader}>The Night Before</h2>
      <p>
        Since I wrote the night before and the day of my race I figured it might
        be useful to take some excerpts and comment on them.{" "}
      </p>
      <p>May 4 2024 - Night before the race </p>
      <p style={styles.quote}>
        I have never ran 26.2 miles before and I am ready to. I do not have much
        nerves, I feel as though I can do this. That confidence is not to say I
        think it will be easy, as I know it will be one of the hardest things I
        have ever done.{" "}
      </p>
      <p>
        At least I knew it was gonna be tough. Looking back I should have had
        more nerves but the goal of this race was to just finish, which I knew I
        was going to.
      </p>
      <p>(Talking about my 20 mile run)</p>
      <p style={styles.quote}>
        Looking back at those splits it is quite clear I was not going at a
        consistent pace and I had no clue where I was going. The fact that I
        don’t need to think about what direction I am going, I have race day
        adrenaline, I have proper fuel, and I will have others to pace with
        gives me further confidence that I will be okay and hit my goal time of
        4 hours.{" "}
      </p>
      <p>
        On most of my practice runs I had no clear course, I would just run for
        a certain amount of time or distance, I was confident that just focusing
        on the running and less the navigation was going to help, which it did
        but the pure distance of the marathon was overpowering for any minor
        changes to mental load.
      </p>
      <p>
        So I was blissfully ignorant for what lie ahead. But I was excited and
        ready to test myself.
      </p>
      <h2 style={styles.subHeader}>Race Day</h2>
      <p>
        I planned to uber to race but was unable to get one due to all the roads
        being shut down. I decided my only option was to drive and figure it
        out. I frantically searched for somewhere to park and found a lot that
        charged $13 a day. I followed everyone else that looked like they were
        running and ended up frantically running around for a mile or so to find
        the start. Once I got to the start I started to do some warmups. Before
        I knew it were were starting and a huge hoard of people all running with
        not much space. That is how it was for the first few miles or so. I was
        feeling good and kept a solid pace all below 9 minutes.{" "}
      </p>
      <p>May 5 2024 - Post Race</p>
      <p style={styles.quote}>
        My fastest split was actually mile 6. I remember not much pain until
        around mile 8-9 where my feet began to hurt. This was mostly my ankles
        but it always feels like that after you run 9 miles.{" "}
      </p>
      <p>
        For the first 5 or so miles I was starting to feel out the race and I
        felt really good. I felt like a machine perfectly opitmized to run.
        Since my watch was just a stopwatch I had a lot of trouble pacing and
        ended up going way too fast for these first 6 miles. My goal was to stay
        around 9 minutes but mile 6 was a 7:57 pace and the others not too far
        off.
      </p>
      <Figure
        imageSrc={image3}
        altText="jack pearson 2024 marathon"
        caption="As you can see I was going too fast and my pace was all over the place."
        size="small"
        title="The Pittbrugh Marathon Route and my splits"
      />
      <p style={styles.quote}>
        Hitting the halfway mark always feels good, but when halfway is 13.1
        miles it is a bittersweet feeling. I still had not stopped to walk at
        this point, which I was quite proud of. I don’t think I have ever run
        that far without stopping.{" "}
      </p>

      <p>
        I was making good time and made it just over 14 miles before I stopped
        to walk for a few minutes. I was starting to be in some pain but I kept
        pushing and reminding myself that this was gonna hurt and it was part of
        the process.
      </p>

      <p>
        The rest of the race was really just fighting the urge to slow down and
        to just keep pushing. My AirPods died, which did not help my mental
        state as the music or audiobook could keep my mind focused on things
        other than the pain in my feet and legs.
      </p>

      <p>
        I kept pushing and finally reached mile 24-25 where I was able to pick
        it back up and run the rest of the race. There was a slight downhill
        which aided my completely destroyed legs. I finally crossed the finish
        line and limped around looking for an exit. I finally found a place to
        get out and then found my girlfriend Rachael who met me at the finish
        line. It was a relief to be finished but I really couldn’t think about
        anything besides the immense pain I felt from my feet to my hips. It was
        like nothing I had ever experienced before. Excruciating pain with no
        end in site. I hobbled with Rachael to a place where an uber could pick
        us up and we headed home. I got inside and took a shower and just laid
        in my bed while I waited for the adrenaline to wear off. I finally was
        able to sleep and took a nap.{" "}
      </p>

      <h2 style={styles.subHeader}>Post Race Recovery</h2>

      <p>
        After the race I had some lingering pain. The first 3 days my knees were
        in an immense amount of pain and it hurt to walk. I tried my best to
        stretch and do some walking in my house but the pain was overwhelming.
        My toes began to turn purple as well from the repetitive slamming on the
        concrete during the race.{" "}
      </p>
      <Figure
        imageSrc={image4}
        altText="jack pearson marathon toe"
        caption="My toes on my left foot were purple."
        size="mini"
        title="Post Marathon Purple Toes!"
      />

      <p>
        I also had some blisters on my feet. All in all my external injuries
        were minimal, no bleeding and no toenails lost. After the knee pain
        subsided a new pain began to emerge. My left foot had a sharp pain which
        made it extremely painful to walk. It was on the top and outside of my
        foot and was most likely a bone bruise as I went to the PatientFirst
        first to rule out any fractures. I had a rough few weeks of walking on
        that left foot but the pain went away after a while. I also have had
        really tight ankles and knees which I have been working to strengthen
        and stretch in the gym. I have also continued to run but no training as
        intense as the marathon since then. I plan to start running for another
        race this summer and potentially doing a triathlon in the future. Now
        that I know I am capable of distance running I plan to train over a much
        longer time horizon and crush my previous marathon time.{" "}
      </p>

      <h2 style={styles.subHeader}>
        Next Time Will Be Different: Marathon Tips I Wish I Knew
      </h2>

      <div>
        <h3 style={styles.sectionTitle}>1. Start Earlier and Train Smarter</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Train for <em>at least</em> 12–16 weeks.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Don’t skip the easy runs as they will build your base. Aim for 40+
            mile weeks at minimum during peak training.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Long runs are non-negotiable. Gradually increase from 6 to 20+ miles
            in 2-mile increments.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>2. Fuel Your Body Like a Machine</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Ensure you are eating whole foods that are high in protein and you
            remain hydrated.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Practice race-day fueling (gels, electrolytes, etc.) on your long
            runs.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Get into a rhythm—your body should know what’s coming.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>3. Invest in the your Gear</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>A watch is a game-changer.
            You can see your pacing, splits, and heart rate in real time.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Get high quality shoes, comfortable shorts, and a nice pack to carry
            fuel and your phone.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Gear is your best friend on race day. It can help prevent injury and
            improves performance.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>4. Plan your Race Day in Advance</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Check out the course in person and plan your logistics for race day:
            parking, start time, exit plan.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Don’t wing it. Stress burns energy before you even start. (I was
            late an ran over a mile to the start)
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Walk through your race-day routine and your have your gear ready the
            day before.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>
          5. Don’t Train Alone (And try Make It Fun)
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>A training partner keeps you
            accountable and makes training more fun. (I trained alone the entire
            time)
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Switch it up with new routes and areas to run. I like to explore new
            areas of the city or wherver I am at.
          </li>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Training shouldn’t feel like punishment. Find ways to enjoy the
            grind. (I am a big fan of listening to podcasts or audiobooks while
            I run)
          </li>
        </ul>
      </div>

      <p>Thanks for reading and I hope you got some value from my story!</p>
      <p>-Jack</p>
      <p style={styles.date}>Published on June 11, 2025</p>

      <Link to="/blogs" style={styles.backLink}>
        Back to Blogs
      </Link>
    </div>
  );
};

export default NewSite;
