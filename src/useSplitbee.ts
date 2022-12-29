import splitbee from '@splitbee/web';
import { useEffect } from 'react';

interface IProps {
  
}

export function useSplitbee(props: IProps) {

  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
    })
  }, [])


}