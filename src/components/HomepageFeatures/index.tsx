import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Geometric Structure',
    Svg: require('@site/static/img/undraw_logo_design_re_gfu6.svg').default,
    description: (
      <>
        Effortlessly create beautiful geometric logos, such as ones used by <a href='https://openai.com/'>OpenAI</a> and <a href='https://www.zellic.io/'>Zellic</a>
      </>
    ),
  },
  {
    title: 'AI Generation',
    Svg: require('@site/static/img/undraw_artificial_intelligence_re_enpp.svg').default,
    description: (
      <>
        Leverage a deep learning AI model trained on SVG path data
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
        Users can access and contribute to its underlying codebase freely.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
