import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Layout from '../components/Layout/Layout';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link } from 'gatsby';

const IndexPage = () => {
  const blogData = generateMockBlogData(3);
  const moreTips = generateMockBlogData(6).slice(3, 6);

  const goToBlog = () => {
    window.location.href = '/blog';
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <div className={styles.heroSection}>
        <Hero
          maxWidth={'600px'}
          image={'/banner1.png'}
          title={'Master Your Dating Life'}
          subtitle={'Expert tips and insights to help you build meaningful connections and find lasting love'}
          ctaText={'Start Reading'}
          ctaAction={goToBlog}
        />
      </div>

      {/* Value Proposition */}
      <div className={styles.messageContainer}>
        <p>
          Your journey to better dating starts here. We provide{' '}
          <span className={styles.highlight}>authentic advice</span> backed by psychology and real-world experience.
        </p>
        <p>
          Join thousands who have transformed their{' '}
          <span className={styles.highlight}>dating success</span>
        </p>
      </div>

      {/* Latest Tips Section */}
      <div className={styles.latestTipsContainer}>
        <Container size={'large'}>
          <Title
            name={'Latest Tips'}
            subtitle={'Practical advice for modern dating'}
            link={'/blog'}
            textLink={'view all'}
          />
          <BlogPreviewGrid data={blogData} showExcerpt />
        </Container>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--light-pink)'}
        title={'Our Philosophy'}
        quote={
          '"Authentic connection starts with understanding yourself. When you approach dating with confidence and self-awareness, meaningful relationships naturally follow."'
        }
      />

      {/* More Dating Tips */}
      <div className={styles.moreTipsContainer}>
        <Container size={'large'}>
          <Title
            name={'More Dating Insights'}
            subtitle={'Deep dives into relationship psychology'}
          />
          <BlogPreviewGrid data={moreTips} showExcerpt />
        </Container>
      </div>

      {/* Featured Section */}
      <div className={styles.featuredContainer}>
        <Hero
          image={'/banner2.png'}
          title={'Transform Your Dating Life'}
          subtitle={'Sign up for our newsletter and get exclusive dating tips delivered straight to your inbox every week.'}
          ctaText={'Subscribe'}
          maxWidth={'600px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Categories Section */}
      <div className={styles.categoriesContainer}>
        <Container>
          <Title
            name={'Explore Topics'}
            subtitle={'Find advice tailored to your needs'}
          />
          <div className={styles.categoriesGrid}>
            <Link to="/blog" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💬</div>
              <h3>Conversation Tips</h3>
              <p>Master the art of engaging dialogue</p>
            </Link>
            <Link to="/blog" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💝</div>
              <h3>First Dates</h3>
              <p>Make lasting first impressions</p>
            </Link>
            <Link to="/blog" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🎯</div>
              <h3>Profile Optimization</h3>
              <p>Stand out from the crowd</p>
            </Link>
            <Link to="/blog" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🛡️</div>
              <h3>Dating Safety</h3>
              <p>Stay safe while finding love</p>
            </Link>
          </div>
        </Container>
      </div>

      {/* Trust Banner */}
      <div className={styles.trustContainer}>
        <Container>
          <div className={styles.trustContent}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>50K+</span>
              <span className={styles.trustLabel}>Monthly Readers</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>200+</span>
              <span className={styles.trustLabel}>Expert Articles</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>95%</span>
              <span className={styles.trustLabel}>Reader Satisfaction</span>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
