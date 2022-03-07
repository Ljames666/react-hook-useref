import { Item, Image } from 'semantic-ui-react';

function ListPerson({ team }) {
  return (
    <Item.Group style={{ padding: 25 }}>
      {team.map((person) => {
        return (
          <Item
            style={{
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: '20rem',
                marginRight: '1rem',
                border: 'solid 5px #43B9AA',
                borderRadius: '50%',
              }}
              src={`${person.image}`}
            />

            <Item.Content>
              <Item.Header style={{ color: ' #43B9AA', fontWeight: 'bold', fontSize: '2rem' }}>
                {person.name}
              </Item.Header>
              <Item.Meta style={{ color: ' #8F938A', fontWeight: 'bold', fontSize: '1rem' }}>
                <span>{person.office}</span>
              </Item.Meta>
              <Item.Description style={{ color: ' #080D08' }}>
                <p style={{ fontSize: '0.9rem' }}>{person.description}</p>
                <p style={{ fontSize: '0.7rem' }}>{person.quote}</p>
              </Item.Description>

              <Item.Extra style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
                  href={`${person.redeSocial.twitter}`}
                />

                <Image
                  src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                  href={`${person.redeSocial.facebook}`}
                />

                <Image
                  src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                  href={`${person.redeSocial.instagram}`}
                />

                <Image
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  href={`${person.redeSocial.linkedin}`}
                />
                <Image
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  href={`${person.redeSocial.github}`}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        );
      })}
    </Item.Group>
  );
}

export default ListPerson;
