import React from 'react'
import Text from 'components/Text'
import Icon from 'components/Icon'
import Tooltip from 'components/Tooltip'
import { useModal } from 'hooks'
import DeletePostModal from 'containers/DeletePostModal'
import { Styled, TooltipItem, TooltipWrapper } from 'containers/PostCard/styles'

const PostCard = ({
  title,
  description,
  postId,
  openEditModal,
  hideTooltip = false,
}) => {
  const [isOpenDeletePostModal, openDeletePostModal, closeDeletePostModal] =
    useModal()

  return (
    <>
      <Styled>
        {!hideTooltip && (
          <Tooltip
            trigger={<Icon type="points" />}
            position="bottom-left"
            on="focus"
          >
            <TooltipWrapper>
              <TooltipItem onClick={() => openEditModal(postId)}>
                Edit
              </TooltipItem>
              <TooltipItem onClick={openDeletePostModal}>Delete</TooltipItem>
            </TooltipWrapper>
          </Tooltip>
        )}

        <Text as="h3">{title}</Text>
        <Text as="p">{description}</Text>
      </Styled>
      <DeletePostModal
        isOpen={isOpenDeletePostModal}
        onClose={closeDeletePostModal}
        postId={postId}
        title={title}
      />
    </>
  )
}

export default PostCard
