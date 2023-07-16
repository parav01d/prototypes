import { useState } from "react";
import {
  Accordion,
  AccordionGroup,
  Card,
  Content,
  Divider,
  Icon,
  Image,
  Navigation,
  Page,
  Paragraph,
  Title,
} from "./Components";

const imageUrl = `https://picsum.photos/seed/${Math.random()}/200/300`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Page>
      <Navigation></Navigation>
      <Content>
        <Divider></Divider>
        <Content>
          <Title>Stand Alone Accordion (controlled by parent)</Title>
        </Content>
        <Accordion isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Accordion.AccordionTrigger>
            <Paragraph>Stand Alone Accordion</Paragraph>
          </Accordion.AccordionTrigger>
          <Accordion.AccordionContent>
            <Paragraph>Content</Paragraph>
          </Accordion.AccordionContent>
        </Accordion>
        <Divider></Divider>
        <Content>
          <Title>Stand Alone Accordion (controlled by parent) with Icon</Title>
        </Content>
        <Accordion isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Accordion.AccordionTrigger>
            <Icon></Icon>
            <Paragraph>Stand Alone Accordion</Paragraph>
          </Accordion.AccordionTrigger>
          <Accordion.AccordionContent>
            <Paragraph>Content</Paragraph>
          </Accordion.AccordionContent>
        </Accordion>
        <Divider></Divider>
        <Content>
          <Title>Accordion Group (controlled by group) as Radio</Title>
        </Content>
        <AccordionGroup isRadio>
          {[1, 2, 3, 4, 5].map((i) => (
            <Accordion id={`${i}`} key={i}>
              <Accordion.AccordionTrigger>
                <Paragraph>Accordion Group as Radio {i}</Paragraph>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent>
                <Paragraph>Content</Paragraph>
              </Accordion.AccordionContent>
            </Accordion>
          ))}
        </AccordionGroup>
        <Divider></Divider>
        <Content>
          <Title>Accordion Group (controlled by group)</Title>
        </Content>
        <AccordionGroup>
          {[1, 2, 3, 4, 5].map((i) => (
            <Accordion id={`${i}`} key={i}>
              <Accordion.AccordionTrigger>
                <Paragraph>Accordion Group {i}</Paragraph>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent>
                <Paragraph>Content</Paragraph>
              </Accordion.AccordionContent>
            </Accordion>
          ))}
        </AccordionGroup>
        <Divider></Divider>
        <Content.ColumnLayout>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
        </Content.ColumnLayout>
        <Divider></Divider>
        <Content.ColumnLayout>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
        </Content.ColumnLayout>
        <Divider></Divider>
        <Content.ColumnLayout>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout. Ich besitze keine eigene Breite,
                    sondern orientiere mich am Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout. Ich besitze keine eigene Breite,
                    sondern orientiere mich am Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.HorizontalLayout>
                <Card.HorizontalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.HorizontalLayout.ImageWrapper>
                <Card.HorizontalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.HorizontalLayout.ContentWrapper>
              </Card.HorizontalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
        </Content.ColumnLayout>
        <Divider></Divider>
        <Content.ColumnLayout>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
          <Content.ColumnLayout.Wrapper>
            <Card>
              <Card.VerticalLayout>
                <Card.VerticalLayout.ImageWrapper>
                  <Image url={imageUrl} />
                </Card.VerticalLayout.ImageWrapper>
                <Card.VerticalLayout.ContentWrapper>
                  <Title>Card</Title>
                  <Paragraph>
                    Ich besitze keine eigene Breite, sondern orientiere mich am
                    Layout. Ich besitze keine eigene Breite, sondern orientiere
                    mich am Layout. Ich besitze keine eigene Breite, sondern
                    orientiere mich am Layout. Ich besitze keine eigene Breite,
                    sondern orientiere mich am Layout. Ich besitze keine eigene
                    Breite, sondern orientiere mich am Layout.
                  </Paragraph>
                </Card.VerticalLayout.ContentWrapper>
              </Card.VerticalLayout>
            </Card>
          </Content.ColumnLayout.Wrapper>
        </Content.ColumnLayout>
      </Content>
    </Page>
  );
}

export default App;
