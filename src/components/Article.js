import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

import Subline from "./Subline";

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0.5rem 0;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 3rem;
  transform: translate(-50%, -30%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, categories }) => {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In{" "}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired
};
