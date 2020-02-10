import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { List, Button, Typography, Row, Col, Divider, Avatar } from 'antd'

import history from '../../history'

import useStoreon from 'storeon/react'

import { GET_LIST } from 'store/community'
import { InnerPageContentContainer } from '../InnerPageContentContainer'
import cn from 'classnames'

const { Title } = Typography

const CommunityListItem = ({ community }) => (
  <List.Item className="Communities-ListItem CommunityCard" key={community.id}>
    <div className="CommunityCard-Content">
      <div>
        <h3 className="CommunityCard-Heading">{community.name}</h3>
        <p className="CommunityCard-Description">{community.description}</p>
        <Link to={`/community/${community.id}`} className="CommunityCard-Link">
          Подробнее —
        </Link>
      </div>
      <Avatar size={102} src={community.logo} style={{ flexShrink: 0 }} />
    </div>
  </List.Item>
)

export const CommunityList = ({ className = '', communitiesData }) => (
  <List
    className={cn('Communities-List', className)}
    grid={{ gutter: 16, column: 2 }}
    size="large"
    pagination={false}
    loading={communitiesData.loading}
    dataSource={communitiesData.list}
    renderItem={community => <CommunityListItem community={community} />}
  />
)

const CommunityListPage = () => {
  const { user, community, dispatch } = useStoreon('community', 'user')
  useEffect(() => {
    dispatch(GET_LIST)
  }, [dispatch])
  return (
    <InnerPageContentContainer>
      <div className="content">
        <Row style={{ display: 'flex', alignItems: 'baseline' }}>
          <Col span={18}>
            <Title className="Heading Heading_level_1">Сообщества</Title>
          </Col>
          <Col span={6}>
            {user && user.verified && (
              <Button
                icon="plus-circle"
                onClick={() => history.push('/community/new')}
              >
                Добавить сообщество
              </Button>
            )}
          </Col>
        </Row>
        <Divider />
        <CommunityList communitiesData={community} />
      </div>
    </InnerPageContentContainer>
  )
}

export default CommunityListPage
