import React, { memo } from "react";
import { Pagination } from 'antd'
import { convertOffsetQuery, convertPageFromOffset, handleObjectQuery } from "@/helpers/common";
import { useRouter } from "next/router";
import { keysQuery } from "@/types/enum";

type Props = {
  offset: number,
  limit: number,
  stateChange: React.Dispatch<React.SetStateAction<number>>,
  path: string,
  total: number,
  default?: number
}

const PaginationContainer: React.FC<Props> = (props) => {

  const router = useRouter();
  const { offset, limit, stateChange, path, total } = props;

  return (
    <>
      <Pagination
        current={convertPageFromOffset(offset, limit)}
        onChange={(e) => {
          handleObjectQuery(router, keysQuery.PAGE, e, path)
          stateChange(convertOffsetQuery(Number(e), limit))
        }}
        total={Number(total) ?? 0}
        pageSize={Number(limit)}
        showSizeChanger={false}
        defaultCurrent={props?.default ?? 1}
      />
    </>
  )
}

export default memo(PaginationContainer)