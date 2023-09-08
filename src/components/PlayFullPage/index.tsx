import React, { memo, useEffect, useRef, useState } from 'react';
import { Radio, Space } from 'antd';
import styles from './styles.module.css'
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import Setting from '@/components/Layout/Navigation/components/setting';
import Svg from '@/components/Common/Svg';
import { setShowFullPage } from '@/store/actions/globalAction';
import Theme_1 from './Theme/theme-1';
import Theme_2 from './Theme/theme-2';

type Props = {
  //
};

const PlayFullPage: React.FC<Props> = () => {
  const [showSetting, setShowSetting] = useState(false)
  const refSetting: any = useRef(null);
  const [showVersion, setShowVersion] = useState(false)
  const refVersion: any = useRef(null);
  const dispatch = useDispatch()

  const handleClickOutside = (event: any, ref: any, action: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    };
    // eslint-disable-next-line
  }, [refSetting]);

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refVersion, setShowVersion));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refVersion, setShowVersion));
    };
    // eslint-disable-next-line
  }, [refVersion]);

  const [version, setVersion] = useState(2)

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setVersion(e.target.value);
  };

  return (
    <>
      <Helmet>
        <style>{`
          body {
            overflow: hidden;
          }
          .navigation, .go-top {
            z-index: -1;
          }
        `}</style>
      </Helmet>
      <div className={`${styles.wrapper} flex justify-center items-center`}>
        <div className={`${styles.action} flex items-center`}>
          <div ref={refVersion} className={`relative`}>
            <div className={`${styles.headerVersion}`} onClick={() => setShowVersion(!showVersion)}>
              V{version}
            </div>
            {
              showVersion
                ? (
                  <div className={`${styles.wrapperVersion}`}>
                    <Radio.Group defaultValue={version} onChange={onChange} value={version} buttonStyle="solid">
                      <Space direction="vertical">
                        {
                          new Array(2).fill(null).map((_, index) => (
                            <Radio.Button key={index} className={`${styles.optionVersion} ${version === index + 1 ? styles.active : ''} whitespace-nowrap`} value={index + 1}>Ver. {index + 1}</Radio.Button>
                          ))
                        }
                      </Space>
                    </Radio.Group>
                  </div>
                ) : (
                  <></>
                )
            }
          </div>

          <div ref={refSetting} className={`relative pl-5`}>
            <div className={`${styles.headerIconSetting}`} onClick={() => setShowSetting(!showSetting)}>
              <Svg name="setting" path="icons" />
            </div>
            {
              showSetting
                ? <Setting />
                : <></>
            }
          </div>

          <div
            className={`${styles.menuFullPage} px-5 flex justify-end items-center`}
            onClick={() => dispatch(setShowFullPage(false))}
          >
            <div className={`${styles.turnOffFullPage}`}>
              <Svg name='chevron-down' path='icons' />
            </div>
          </div>
        </div>
        {
          version === 1
            ? <Theme_1 />
            : <Theme_2 />
        }
      </div>
    </>
  );
};

export default memo(PlayFullPage);
