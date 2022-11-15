import VPlayer from "react-vplayer";
import "../styles.css";
import { Container, Row, Col } from "react-bootstrap";
const Section = () => {
  return (
    <>
      <Container className="eventsNav pt-0 mt-0">
        <Row>
          <Col xs="12" md="6">
            <h2>SV Resort</h2>
            <p>
              The SV Resort in Lake Tahoe, California is a boutique hotel with a
              camping vibe, complete with outdoor S’mores fire pits, trail maps,
              and even an indoor camping tent. The website for the hotel plays
              up this theme and increases guest anticipation for an exciting
              trip.
            </p>
            <p>
              When guests visit a location, many of them want to feel like they
              are soaking up the charm and unique qualities of that locale. The
              Ace Hotel in Portland Oregon does a great job of showcasing the
              feel of Portland within its hotel website design, so that guests
              can get a good idea of what to expect from their stay.
            </p>
            <h4>Wellbeing</h4>
            <p>
              Inviting and expansive, Kaya Kalp – The Royal Spa promotes health,
              relaxation and inner peace through a wide selection of Ayurvedic,
              international and indigenous therapies. Promoting holistic
              wellbeing & fitness the hotel offers healthy cuisine offerings,
              personalized fitness regimes, a conducive sleep environment and
              exclusive amenities & facilities.
            </p>
            <h4>Royal Spa</h4>
            <p>
              Personalised therapies from ancient India and all over the world
              in a fragrant paradise that relaxes and rejuvenates every guest.
              Gentle, sensitive care for holistic healing in an ambience of
              tranquillity.
            </p>
            <p>
              Spa therapies have existed since the classical times when taking
              bath with water was considered as a popular means to treat
              illnesses. The practice of traveling to hot or cold springs in
              hopes of effecting a cure of some ailment dates back to
              prehistoric times. Archaeological investigations near hot springs
              in France and Czech Republic revealed Bronze Age weapons and
              offerings. In Great Britain, ancient legend credited early Celtic
              kings with the discovery of the hot springs in Bath, England.
            </p>
          </Col>
          <Col xs="12" md="6">
            <h1>About</h1>
            <div>
              <VPlayer
                style={{ marginBottom: "10px" }}
                source={[
                  {
                    url:
                      "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4",
                    type: "video/mp4",
                    quality: 720
                  },
                  {
                    url:
                      "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/1080p.mp4",
                    type: "video/mp4",
                    quality: 1080
                  },
                  {
                    url:
                      "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/480p.mp4",
                    type: "video/mp4",
                    quality: 480
                  },
                  {
                    url:
                      "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/360p.mp4",
                    type: "video/mp4",
                    quality: 360
                  }
                ]}
                // loadSrt="https://www.jplayer.net/asset/userdata/223028/caption/mzvk-pmk1oq/28752.srt"
                // loadAds="https://www.movcpm.com/watch.xml?key=1ab5f853805ad39477e714e75ac6862b&custom=%7B%27width%27%3A%27[WIDTH]%27%2C%27height%27%3A%27[HEIGHT]%27%7D&cb=[CACHE_BUSTERS]&vastref=[PAGE_URL]"
              />
              <h4 style={{ marginTop: "20px" }}>Description</h4>
              <p>
                Hotel View Point offers a relaxing vacation in the hilly hamlet
                of West Sikkim, flaunting rooms with Mountain View and on-site
                facilities for a comfortable stay. The property enjoys a great
                location advantage.
              </p>
              <p>
                Imbued with the artistry and cultural enlightenment of the
                Cholas, these splendid suites deftly blend intuitive design,
                refined aesthetics and functional ease.
              </p>
              <ul>
                <li>
                  A beautiful dining area for the guests to delight in delicious
                  cuisines.
                </li>
                <li>Guests can visit Hanuman Tok at 7 km from the property.</li>
                <li>
                  There is a seating area and balcony for the guests to lounge
                  at this location.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section;
