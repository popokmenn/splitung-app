import axios from 'axios';

const apiKey =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCS1ypvqgkdHCRi\nPuV8mH+7DedqhnKQV23UYwES8hHsGqt+ZZGS7QBy8j2Lvwo+CqISfZo2WFpVgcKt\nTSzdElwkC1VWzWeQaUuraT5VD3pmTGU3CltrSqD0kxl4CqMIs/4C4VLHLztLFP5P\nk1g8QSJv7OSU42mwK90Fk4j90fwVINfCHKsYtV3iA6V3TQH864tVaR+ch8/KcNAt\n5WcPzXRQWPfA+mSpjNWTYDju9jcbqj/H3bBMbSMOQc/Yjr1ehqXvTw+VpIDFUH43\nPXarqvLTLiDBb6I6xH1zcVBzD16jsTKm2IqNJfvbguUj2rGCv/mG2XyOM2eaVbQL\ned3JD+IdAgMBAAECggEAB0q9Fj985V+s5N4Xuli+WxUlLVKQ5N8amqXx+zVfM3jd\nlFDJ6mBvmcWyzbpGcW9Ivh9Tpag8kCt59e4zsKTFQ5r2eXGI15CLC++Vg1bZ7rOT\ngSi4Ant5w7t8U8w/bWK21gDHghGz4ZYgzOXVx2Q6qBE9BrHGYVPETY8WifhACvJ7\ny/pnj7jeaPl/2ozncAu/nMK5L+MmoraKDJYVc3NcpoM5IhbpYiJHpeyYWycEgUqD\naa7UoMrVMnCFrbnPOD7stJLtDNsdBFv0Ni+DfEYQlg6tipJVDLRnPSFFHDjGm7HJ\nHdQHvQ4hUdsERoDUzjyOKyBpmMx08WpBCesuvpsWdwKBgQDMVBakDX/4agDms88J\nxmF2x8SUWXKRDNWBKnww8A2InlkpGUchbCN66lzRen6Q+36oakbhG8YcbqramaaL\nrbUYmH38ekgzBaIBcRXT72XepUq/j2parx4N0qUmWsExmgclUxrLyFH2KsAap3e5\nob8t1UzZVxAoTaRhF7ocH7/8qwKBgQC3+WTPYbN6e8ETyqE/6nXQFCoxJd+Y0UIM\nQpqlgRtG1UnQrPeKvRB8MVoQ1JmoOaefX514k0upqjELVGvqQ0XQ3n7TVJzGnMxL\nSSVXUSFq2nK69227GDhG1xKL6OHVsBQZ3U55lJSXr2WvqUEAhrZFwpKtRG1Thn4U\nmapjKusMVwKBgD+mJhNefTGl27gB5QmXeX7lxc+seWrDw7JjyKH59U1Mflu2GxlH\nNVoxrU43yTtijFbsHD49R55Nvv0vhdjW+KW7wusmMF1scMXgMzt8xI/xj3JSu3+a\nM1N8/aMP/ER2RamT1LIMKbP0JzlmV35E62fcnP7LByZ24TC5kmj2XvjXAoGBAJL3\nlgLdJ8WXCxzGaJ5orIj3MuVkPgUUVdD5fBTu2F1zka40HuQkOQEdY7fCPqXWuQNm\nHKPv9yeon9lPLY5NA37h3yrvkvZO2BzkaAIi+7EipTia5Hvr0zk0IsrF1XMhYE1x\nL3mMqk+qfG8hpJ3I/98mmonz+eoZrKrEPwtNg8utAoGBAIPQXYcUfQFtIej4iHqL\nFyw6z8x2RcQKgIjXAoBIGWPjMryy5SF8Ci/eQTvAB795/XBmzWUDqlB/AplQvBbw\nILgFDDRdVymI54ARz8U1ShaIgXyVIKywh8huLTqpipTZZx2eOw/WJ8KhiMsQtqz/\nBMsx4LXp8FxBqp2xuzO/NOQi\n-----END PRIVATE KEY-----\n';

export const convertImageToText = async (imageUrl: string) => {
  try {
    const response = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        requests: [
          {
            image: {
              source: {
                imageUri: imageUrl,
              },
            },
            features: [
              {
                type: 'TEXT_DETECTION',
              },
            ],
          },
        ],
      },
    );

    const textAnnotations = response.data.responses[0].textAnnotations;
    // Extract and process the extracted text as needed
    console.log(textAnnotations);
  } catch (error) {
    console.error('Error converting image to text:', error);
  }
};
