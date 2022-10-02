// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      19: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Mat(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Mat expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Mat expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v547, v548], secs: v550, time: v549, didSend: v71, from: v546 } = txn1;
  ;
  const v559 = stdlib.safeAdd(v549, v548);
  stdlib.protect(ctc1, await interact.acceptWager(v547), {
    at: './index.rsh:81:29:application',
    fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
    msg: 'acceptWager',
    who: 'Mat'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v546, v547, v548, v559],
    evt_cnt: 0,
    funcNum: 1,
    lct: v549,
    onlyIf: true,
    out_tys: [],
    pay: [v547, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v565, time: v564, didSend: v80, from: v563 } = txn2;
      
      const v567 = stdlib.add(v547, v547);
      sim_r.txns.push({
        amt: v547,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v568 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v569 = v564;
      const v576 = v567;
      
      if (await (async () => {
        const v584 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v584;})()) {
        const v591 = stdlib.safeAdd(v569, v548);
        sim_r.isHalt = false;
        }
      else {
        const v866 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v869 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, '2'), v547);
        const v871 = v866 ? v546 : v563;
        sim_r.txns.push({
          kind: 'from',
          to: v871,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v559],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v546, v547, v548, v559],
      evt_cnt: 0,
      funcNum: 2,
      lct: v549,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v884, time: v883, didSend: v489, from: v882 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v546,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v884, time: v883, didSend: v489, from: v882 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:68:35:application',
      fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Mat'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v565, time: v564, didSend: v80, from: v563 } = txn2;
    const v567 = stdlib.add(v547, v547);
    ;
    let v568 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v569 = v564;
    let v576 = v567;
    
    let txn3 = txn2;
    while (await (async () => {
      const v584 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v584;})()) {
      const v591 = stdlib.safeAdd(v569, v548);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v591],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v546, v547, v548, v563, v576, v591],
          evt_cnt: 0,
          funcNum: 5,
          lct: v569,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v850, time: v849, didSend: v440, from: v848 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v563,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v850, time: v849, didSend: v440, from: v848 } = txn5;
        ;
        const v851 = stdlib.addressEq(v563, v848);
        const v852 = stdlib.addressEq(v546, v848);
        const v853 = v851 ? true : v852;
        stdlib.assert(v853, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:101:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Mat'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:68:35:application',
          fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:101:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Mat'
          });
        
        return;
        
        }
      else {
        const {data: [v604], secs: v606, time: v605, didSend: v111, from: v603 } = txn4;
        ;
        const v607 = stdlib.addressEq(v546, v603);
        stdlib.assert(v607, {
          at: './index.rsh:100:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Mat'
          });
        const v614 = stdlib.safeAdd(v605, v548);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v614],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v546, v547, v548, v563, v576, v604, v614],
            evt_cnt: 0,
            funcNum: 7,
            lct: v605,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v832, time: v831, didSend: v406, from: v830 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v832, time: v831, didSend: v406, from: v830 } = txn6;
          ;
          const v833 = stdlib.addressEq(v563, v830);
          const v834 = stdlib.addressEq(v546, v830);
          const v835 = v833 ? true : v834;
          stdlib.assert(v835, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Mat'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:68:35:application',
            fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:104:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Mat'
            });
          
          return;
          
          }
        else {
          const {data: [v617], secs: v619, time: v618, didSend: v117, from: v616 } = txn5;
          ;
          const v620 = stdlib.addressEq(v546, v616);
          stdlib.assert(v620, {
            at: './index.rsh:103:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Mat'
            });
          const v627 = stdlib.safeAdd(v618, v548);
          const v631 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:111:56:application',
            fs: ['at ./index.rsh:110:17:application call to [unknown function] (defined at: ./index.rsh:110:21:function exp)'],
            msg: 'getHand',
            who: 'Mat'
            });
          const v632 = stdlib.protect(ctc0, await interact.getGuess(), {
            at: './index.rsh:112:58:application',
            fs: ['at ./index.rsh:110:17:application call to [unknown function] (defined at: ./index.rsh:110:21:function exp)'],
            msg: 'getGuess',
            who: 'Mat'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v546, v547, v548, v563, v576, v604, v617, v627, v631],
            evt_cnt: 1,
            funcNum: 8,
            lct: v618,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:114:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v634], secs: v636, time: v635, didSend: v128, from: v633 } = txn6;
              
              ;
              const v644 = stdlib.safeAdd(v635, v548);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v627],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v546, v547, v548, v563, v576, v604, v617, v627],
              evt_cnt: 0,
              funcNum: 9,
              lct: v618,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v814, time: v813, didSend: v372, from: v812 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v546,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v814, time: v813, didSend: v372, from: v812 } = txn7;
            ;
            const v815 = stdlib.addressEq(v563, v812);
            const v816 = stdlib.addressEq(v546, v812);
            const v817 = v815 ? true : v816;
            stdlib.assert(v817, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:115:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Mat'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:68:35:application',
              fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:115:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Mat'
              });
            
            return;
            
            }
          else {
            const {data: [v634], secs: v636, time: v635, didSend: v128, from: v633 } = txn6;
            ;
            const v637 = stdlib.addressEq(v563, v633);
            stdlib.assert(v637, {
              at: './index.rsh:114:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Mat'
              });
            const v644 = stdlib.safeAdd(v635, v548);
            const txn7 = await (ctc.sendrecv({
              args: [v546, v547, v548, v563, v576, v604, v617, v634, v644, v632],
              evt_cnt: 1,
              funcNum: 10,
              lct: v635,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:117:13:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v647], secs: v649, time: v648, didSend: v134, from: v646 } = txn7;
                
                ;
                const v657 = stdlib.safeAdd(v648, v548);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v644],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v546, v547, v548, v563, v576, v604, v617, v634, v644],
                evt_cnt: 0,
                funcNum: 11,
                lct: v635,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v796, time: v795, didSend: v338, from: v794 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v546,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v796, time: v795, didSend: v338, from: v794 } = txn8;
              ;
              const v797 = stdlib.addressEq(v563, v794);
              const v798 = stdlib.addressEq(v546, v794);
              const v799 = v797 ? true : v798;
              stdlib.assert(v799, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:118:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Mat'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:68:35:application',
                fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:118:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Mat'
                });
              
              return;
              
              }
            else {
              const {data: [v647], secs: v649, time: v648, didSend: v134, from: v646 } = txn7;
              ;
              const v650 = stdlib.addressEq(v563, v646);
              stdlib.assert(v650, {
                at: './index.rsh:117:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Mat'
                });
              const v657 = stdlib.safeAdd(v648, v548);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v657],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v546, v547, v548, v563, v576, v604, v617, v634, v647, v657],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v648,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v778, time: v777, didSend: v304, from: v776 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v563,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v778, time: v777, didSend: v304, from: v776 } = txn9;
                ;
                const v779 = stdlib.addressEq(v563, v776);
                const v780 = stdlib.addressEq(v546, v776);
                const v781 = v779 ? true : v780;
                stdlib.assert(v781, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Mat'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:68:35:application',
                  fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Mat'
                  });
                
                return;
                
                }
              else {
                const {data: [v662, v663], secs: v665, time: v664, didSend: v144, from: v661 } = txn8;
                ;
                const v666 = stdlib.addressEq(v546, v661);
                stdlib.assert(v666, {
                  at: './index.rsh:127:13:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Mat'
                  });
                const v667 = stdlib.digest([ctc0, ctc0], [v662, v663]);
                const v668 = stdlib.digestEq(v604, v667);
                stdlib.assert(v668, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:129:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Mat'
                  });
                const v675 = stdlib.safeAdd(v664, v548);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v675],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v546, v547, v548, v563, v576, v617, v634, v647, v663, v675],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v664,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v760, time: v759, didSend: v270, from: v758 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v563,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v760, time: v759, didSend: v270, from: v758 } = txn10;
                  ;
                  const v761 = stdlib.addressEq(v563, v758);
                  const v762 = stdlib.addressEq(v546, v758);
                  const v763 = v761 ? true : v762;
                  stdlib.assert(v763, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Mat'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:68:35:application',
                    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Mat'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v678, v679], secs: v681, time: v680, didSend: v154, from: v677 } = txn9;
                  ;
                  const v682 = stdlib.addressEq(v546, v677);
                  stdlib.assert(v682, {
                    at: './index.rsh:131:13:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Mat'
                    });
                  const v683 = stdlib.digest([ctc0, ctc0], [v678, v679]);
                  const v684 = stdlib.digestEq(v617, v683);
                  stdlib.assert(v684, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:133:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Mat'
                    });
                  const v691 = stdlib.safeAdd(v680, v548);
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v691],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v691],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v680,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v742, time: v741, didSend: v236, from: v740 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v546,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v742, time: v741, didSend: v236, from: v740 } = txn11;
                    ;
                    const v743 = stdlib.addressEq(v563, v740);
                    const v744 = stdlib.addressEq(v546, v740);
                    const v745 = v743 ? true : v744;
                    stdlib.assert(v745, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:141:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Mat'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:68:35:application',
                      fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:141:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Mat'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v697], secs: v699, time: v698, didSend: v167, from: v696 } = txn10;
                    ;
                    const v700 = stdlib.addressEq(v546, v696);
                    stdlib.assert(v700, {
                      at: './index.rsh:140:13:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Mat'
                      });
                    const v707 = stdlib.safeAdd(v698, v548);
                    const v711 = stdlib.safeAdd(v663, v634);
                    stdlib.protect(ctc1, await interact.seeCorrectAns(v711), {
                      at: './index.rsh:146:35:application',
                      fs: ['at ./index.rsh:144:17:application call to [unknown function] (defined at: ./index.rsh:144:21:function exp)'],
                      msg: 'seeCorrectAns',
                      who: 'Mat'
                      });
                    
                    const txn11 = await (ctc.sendrecv({
                      args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v707, v711],
                      evt_cnt: 1,
                      funcNum: 18,
                      lct: v698,
                      onlyIf: true,
                      out_tys: [ctc0],
                      pay: [stdlib.checkedBigNumberify('./index.rsh:148:13:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [v713], secs: v715, time: v714, didSend: v177, from: v712 } = txn11;
                        
                        ;
                        let v717;
                        const v718 = stdlib.safeAdd(v663, v634);
                        const v719 = stdlib.eq(v679, v647);
                        if (v719) {
                          v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        else {
                          const v720 = stdlib.eq(v679, v718);
                          if (v720) {
                            v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            const v721 = stdlib.eq(v647, v718);
                            if (v721) {
                              v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                              }
                            else {
                              v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                              }
                            }
                          }
                        const cv568 = v717;
                        const cv569 = v714;
                        const cv576 = v576;
                        
                        await (async () => {
                          const v568 = cv568;
                          const v569 = cv569;
                          const v576 = cv576;
                          
                          if (await (async () => {
                            const v584 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                            
                            return v584;})()) {
                            const v591 = stdlib.safeAdd(v569, v548);
                            sim_r.isHalt = false;
                            }
                          else {
                            const v866 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                            const v869 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, '2'), v547);
                            const v871 = v866 ? v546 : v563;
                            sim_r.txns.push({
                              kind: 'from',
                              to: v871,
                              tok: undefined /* Nothing */
                              });
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }})();
                        return sim_r;
                        }),
                      soloSend: true,
                      timeoutAt: ['time', v707],
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    if (txn11.didTimeout) {
                      const txn12 = await (ctc.sendrecv({
                        args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v707],
                        evt_cnt: 0,
                        funcNum: 19,
                        lct: v698,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn12) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v724, time: v723, didSend: v202, from: v722 } = txn12;
                          
                          ;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v546,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          
                          return sim_r;
                          }),
                        soloSend: false,
                        timeoutAt: undefined /* mto */,
                        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v724, time: v723, didSend: v202, from: v722 } = txn12;
                      ;
                      const v725 = stdlib.addressEq(v563, v722);
                      const v726 = stdlib.addressEq(v546, v722);
                      const v727 = v725 ? true : v726;
                      stdlib.assert(v727, {
                        at: 'reach standard library:197:11:dot',
                        fs: ['at ./index.rsh:149:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Mat'
                        });
                      ;
                      stdlib.protect(ctc1, await interact.informTimeout(), {
                        at: './index.rsh:68:35:application',
                        fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:149:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'informTimeout',
                        who: 'Mat'
                        });
                      
                      return;
                      
                      }
                    else {
                      const {data: [v713], secs: v715, time: v714, didSend: v177, from: v712 } = txn11;
                      ;
                      const v716 = stdlib.addressEq(v563, v712);
                      stdlib.assert(v716, {
                        at: './index.rsh:148:13:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Mat'
                        });
                      let v717;
                      const v718 = stdlib.safeAdd(v663, v634);
                      const v719 = stdlib.eq(v679, v647);
                      if (v719) {
                        v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v720 = stdlib.eq(v679, v718);
                        if (v720) {
                          v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          const v721 = stdlib.eq(v647, v718);
                          if (v721) {
                            v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            }
                          else {
                            v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv568 = v717;
                      const cv569 = v714;
                      const cv576 = v576;
                      
                      v568 = cv568;
                      v569 = cv569;
                      v576 = cv576;
                      
                      txn3 = txn11;
                      continue;}
                    
                    }
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v866 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v869 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, '2'), v547);
    const v871 = v866 ? v546 : v563;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v568), {
      at: './index.rsh:160:28:application',
      fs: ['at ./index.rsh:159:9:application call to [unknown function] (defined at: ./index.rsh:159:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Mat'
      });
    
    return;
    }
  
  
  
  };
export async function Sam(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sam expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sam expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v542 = stdlib.protect(ctc0, interact.deadline, 'for Sam\'s interact field deadline');
  const v543 = stdlib.protect(ctc0, interact.wager, 'for Sam\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v543, v542],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:76:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v543, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v547, v548], secs: v550, time: v549, didSend: v71, from: v546 } = txn1;
      
      sim_r.txns.push({
        amt: v547,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v559 = stdlib.safeAdd(v549, v548);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v547, v548], secs: v550, time: v549, didSend: v71, from: v546 } = txn1;
  ;
  const v559 = stdlib.safeAdd(v549, v548);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v559],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v546, v547, v548, v559],
      evt_cnt: 0,
      funcNum: 2,
      lct: v549,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v884, time: v883, didSend: v489, from: v882 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v546,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v884, time: v883, didSend: v489, from: v882 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:68:35:application',
      fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Sam'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v565, time: v564, didSend: v80, from: v563 } = txn2;
    const v567 = stdlib.add(v547, v547);
    ;
    let v568 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v569 = v564;
    let v576 = v567;
    
    let txn3 = txn2;
    while (await (async () => {
      const v584 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v584;})()) {
      const v591 = stdlib.safeAdd(v569, v548);
      const v595 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:92:46:application',
        fs: ['at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
        msg: 'getHand',
        who: 'Sam'
        });
      const v596 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:93:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
        msg: 'random',
        who: 'Sam'
        });
      const v597 = stdlib.digest([ctc0, ctc0], [v596, v595]);
      const v599 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:96:48:application',
        fs: ['at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
        msg: 'getGuess',
        who: 'Sam'
        });
      const v600 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:97:68:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
        msg: 'random',
        who: 'Sam'
        });
      const v601 = stdlib.digest([ctc0, ctc0], [v600, v599]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v546, v547, v548, v563, v576, v591, v597],
        evt_cnt: 1,
        funcNum: 4,
        lct: v569,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:100:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v604], secs: v606, time: v605, didSend: v111, from: v603 } = txn4;
          
          ;
          const v614 = stdlib.safeAdd(v605, v548);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v591],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v546, v547, v548, v563, v576, v591],
          evt_cnt: 0,
          funcNum: 5,
          lct: v569,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v850, time: v849, didSend: v440, from: v848 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v563,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v850, time: v849, didSend: v440, from: v848 } = txn5;
        ;
        const v851 = stdlib.addressEq(v563, v848);
        const v852 = stdlib.addressEq(v546, v848);
        const v853 = v851 ? true : v852;
        stdlib.assert(v853, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:101:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Sam'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:68:35:application',
          fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:101:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Sam'
          });
        
        return;
        
        }
      else {
        const {data: [v604], secs: v606, time: v605, didSend: v111, from: v603 } = txn4;
        ;
        const v607 = stdlib.addressEq(v546, v603);
        stdlib.assert(v607, {
          at: './index.rsh:100:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sam'
          });
        const v614 = stdlib.safeAdd(v605, v548);
        const txn5 = await (ctc.sendrecv({
          args: [v546, v547, v548, v563, v576, v604, v614, v601],
          evt_cnt: 1,
          funcNum: 6,
          lct: v605,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:103:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v617], secs: v619, time: v618, didSend: v117, from: v616 } = txn5;
            
            ;
            const v627 = stdlib.safeAdd(v618, v548);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v614],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v546, v547, v548, v563, v576, v604, v614],
            evt_cnt: 0,
            funcNum: 7,
            lct: v605,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v832, time: v831, didSend: v406, from: v830 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v563,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v832, time: v831, didSend: v406, from: v830 } = txn6;
          ;
          const v833 = stdlib.addressEq(v563, v830);
          const v834 = stdlib.addressEq(v546, v830);
          const v835 = v833 ? true : v834;
          stdlib.assert(v835, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Sam'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:68:35:application',
            fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:104:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Sam'
            });
          
          return;
          
          }
        else {
          const {data: [v617], secs: v619, time: v618, didSend: v117, from: v616 } = txn5;
          ;
          const v620 = stdlib.addressEq(v546, v616);
          stdlib.assert(v620, {
            at: './index.rsh:103:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sam'
            });
          const v627 = stdlib.safeAdd(v618, v548);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v627],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v546, v547, v548, v563, v576, v604, v617, v627],
              evt_cnt: 0,
              funcNum: 9,
              lct: v618,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v814, time: v813, didSend: v372, from: v812 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v546,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v814, time: v813, didSend: v372, from: v812 } = txn7;
            ;
            const v815 = stdlib.addressEq(v563, v812);
            const v816 = stdlib.addressEq(v546, v812);
            const v817 = v815 ? true : v816;
            stdlib.assert(v817, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:115:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Sam'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:68:35:application',
              fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:115:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Sam'
              });
            
            return;
            
            }
          else {
            const {data: [v634], secs: v636, time: v635, didSend: v128, from: v633 } = txn6;
            ;
            const v637 = stdlib.addressEq(v563, v633);
            stdlib.assert(v637, {
              at: './index.rsh:114:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sam'
              });
            const v644 = stdlib.safeAdd(v635, v548);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v644],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v546, v547, v548, v563, v576, v604, v617, v634, v644],
                evt_cnt: 0,
                funcNum: 11,
                lct: v635,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v796, time: v795, didSend: v338, from: v794 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v546,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v796, time: v795, didSend: v338, from: v794 } = txn8;
              ;
              const v797 = stdlib.addressEq(v563, v794);
              const v798 = stdlib.addressEq(v546, v794);
              const v799 = v797 ? true : v798;
              stdlib.assert(v799, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:118:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Sam'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:68:35:application',
                fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:118:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Sam'
                });
              
              return;
              
              }
            else {
              const {data: [v647], secs: v649, time: v648, didSend: v134, from: v646 } = txn7;
              ;
              const v650 = stdlib.addressEq(v563, v646);
              stdlib.assert(v650, {
                at: './index.rsh:117:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sam'
                });
              const v657 = stdlib.safeAdd(v648, v548);
              const txn8 = await (ctc.sendrecv({
                args: [v546, v547, v548, v563, v576, v604, v617, v634, v647, v657, v596, v595],
                evt_cnt: 2,
                funcNum: 12,
                lct: v648,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:127:13:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v662, v663], secs: v665, time: v664, didSend: v144, from: v661 } = txn8;
                  
                  ;
                  const v675 = stdlib.safeAdd(v664, v548);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v657],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v546, v547, v548, v563, v576, v604, v617, v634, v647, v657],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v648,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v778, time: v777, didSend: v304, from: v776 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v563,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v778, time: v777, didSend: v304, from: v776 } = txn9;
                ;
                const v779 = stdlib.addressEq(v563, v776);
                const v780 = stdlib.addressEq(v546, v776);
                const v781 = v779 ? true : v780;
                stdlib.assert(v781, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Sam'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:68:35:application',
                  fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Sam'
                  });
                
                return;
                
                }
              else {
                const {data: [v662, v663], secs: v665, time: v664, didSend: v144, from: v661 } = txn8;
                ;
                const v666 = stdlib.addressEq(v546, v661);
                stdlib.assert(v666, {
                  at: './index.rsh:127:13:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Sam'
                  });
                const v667 = stdlib.digest([ctc0, ctc0], [v662, v663]);
                const v668 = stdlib.digestEq(v604, v667);
                stdlib.assert(v668, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:129:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Sam'
                  });
                const v675 = stdlib.safeAdd(v664, v548);
                const txn9 = await (ctc.sendrecv({
                  args: [v546, v547, v548, v563, v576, v617, v634, v647, v663, v675, v600, v599],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v664,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:131:13:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v678, v679], secs: v681, time: v680, didSend: v154, from: v677 } = txn9;
                    
                    ;
                    const v691 = stdlib.safeAdd(v680, v548);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v675],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v546, v547, v548, v563, v576, v617, v634, v647, v663, v675],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v664,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v760, time: v759, didSend: v270, from: v758 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v563,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v760, time: v759, didSend: v270, from: v758 } = txn10;
                  ;
                  const v761 = stdlib.addressEq(v563, v758);
                  const v762 = stdlib.addressEq(v546, v758);
                  const v763 = v761 ? true : v762;
                  stdlib.assert(v763, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Sam'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:68:35:application',
                    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Sam'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v678, v679], secs: v681, time: v680, didSend: v154, from: v677 } = txn9;
                  ;
                  const v682 = stdlib.addressEq(v546, v677);
                  stdlib.assert(v682, {
                    at: './index.rsh:131:13:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Sam'
                    });
                  const v683 = stdlib.digest([ctc0, ctc0], [v678, v679]);
                  const v684 = stdlib.digestEq(v617, v683);
                  stdlib.assert(v684, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:133:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Sam'
                    });
                  const v691 = stdlib.safeAdd(v680, v548);
                  const v695 = stdlib.safeAdd(v663, v634);
                  stdlib.protect(ctc2, await interact.seeCorrectAns(v695), {
                    at: './index.rsh:138:35:application',
                    fs: ['at ./index.rsh:136:17:application call to [unknown function] (defined at: ./index.rsh:136:21:function exp)'],
                    msg: 'seeCorrectAns',
                    who: 'Sam'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v691, v695],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v680,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:140:13:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v697], secs: v699, time: v698, didSend: v167, from: v696 } = txn10;
                      
                      ;
                      const v707 = stdlib.safeAdd(v698, v548);
                      sim_r.isHalt = false;
                      
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v691],
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v691],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v680,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v742, time: v741, didSend: v236, from: v740 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v546,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v742, time: v741, didSend: v236, from: v740 } = txn11;
                    ;
                    const v743 = stdlib.addressEq(v563, v740);
                    const v744 = stdlib.addressEq(v546, v740);
                    const v745 = v743 ? true : v744;
                    stdlib.assert(v745, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:141:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Sam'
                      });
                    ;
                    stdlib.protect(ctc2, await interact.informTimeout(), {
                      at: './index.rsh:68:35:application',
                      fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:141:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Sam'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v697], secs: v699, time: v698, didSend: v167, from: v696 } = txn10;
                    ;
                    const v700 = stdlib.addressEq(v546, v696);
                    stdlib.assert(v700, {
                      at: './index.rsh:140:13:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Sam'
                      });
                    const v707 = stdlib.safeAdd(v698, v548);
                    const txn11 = await (ctc.recv({
                      didSend: false,
                      evt_cnt: 1,
                      funcNum: 18,
                      out_tys: [ctc0],
                      timeoutAt: ['time', v707],
                      waitIfNotPresent: false
                      }));
                    if (txn11.didTimeout) {
                      const txn12 = await (ctc.sendrecv({
                        args: [v546, v547, v548, v563, v576, v634, v647, v663, v679, v707],
                        evt_cnt: 0,
                        funcNum: 19,
                        lct: v698,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn12) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v724, time: v723, didSend: v202, from: v722 } = txn12;
                          
                          ;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v546,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          
                          return sim_r;
                          }),
                        soloSend: false,
                        timeoutAt: undefined /* mto */,
                        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v724, time: v723, didSend: v202, from: v722 } = txn12;
                      ;
                      const v725 = stdlib.addressEq(v563, v722);
                      const v726 = stdlib.addressEq(v546, v722);
                      const v727 = v725 ? true : v726;
                      stdlib.assert(v727, {
                        at: 'reach standard library:197:11:dot',
                        fs: ['at ./index.rsh:149:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Sam'
                        });
                      ;
                      stdlib.protect(ctc2, await interact.informTimeout(), {
                        at: './index.rsh:68:35:application',
                        fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:66:30:function exp)', 'at ./index.rsh:149:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'informTimeout',
                        who: 'Sam'
                        });
                      
                      return;
                      
                      }
                    else {
                      const {data: [v713], secs: v715, time: v714, didSend: v177, from: v712 } = txn11;
                      ;
                      const v716 = stdlib.addressEq(v563, v712);
                      stdlib.assert(v716, {
                        at: './index.rsh:148:13:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Sam'
                        });
                      let v717;
                      const v718 = stdlib.safeAdd(v663, v634);
                      const v719 = stdlib.eq(v679, v647);
                      if (v719) {
                        v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v720 = stdlib.eq(v679, v718);
                        if (v720) {
                          v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          const v721 = stdlib.eq(v647, v718);
                          if (v721) {
                            v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            }
                          else {
                            v717 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv568 = v717;
                      const cv569 = v714;
                      const cv576 = v576;
                      
                      v568 = cv568;
                      v569 = cv569;
                      v576 = cv576;
                      
                      txn3 = txn11;
                      continue;}
                    
                    }
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v866 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v869 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, '2'), v547);
    const v871 = v866 ? v546 : v563;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v568), {
      at: './index.rsh:160:28:application',
      fs: ['at ./index.rsh:159:9:application call to [unknown function] (defined at: ./index.rsh:159:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Sam'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAZAAFQICh4CBMFDxFYAg2YAQsHCaABYHBokAGoATAmAwEAAQEAIjUAMRhBChEqZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEKDEAFY0khCQxAAmlJIQoMQAFYSYESDEAA/kkhBwxAAFYhBxJEIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gAQH5y8TsDIGNAMhBVsPRDQDVzAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IJIEghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUlXMCA1/yETWzX+IRRbNf1JNQUXNfyABDtNOrg0/BZQsDIGNAMhBVsMRDT/MQASRDQDIRVbNAMhC1sINfo0/TT+EkEABiM1+0IAIDT9NPoSQQAGIjX7QgASNP40+hJBAAchDDX7QgADIzX7NANXACA0AyVbNAMhBFs0/zT7MgY0AyRbQggeSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEAIHSjrAyBjQDIQVbD0Q0A1cwIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCCCxJgRAMQACwSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7IQtbNfohE1s1+SEVWzX4IRRbNfdJNQUXNfaABH6FEHE09hZQsDIGNAMhBVsMRDT/MQASRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT3FlA09RZQKEsBVwB/ZylLAVd/AWdIIQc1ATIGNQJCB5FIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gARGR4xesDIGNAMhFlsPRDT/MQASNANXACAxABIRRLEisgE0AyRbsggjshA0/7IHs0IHIkmBDAxAAepJIQ0MQAEgSYEODEAAxkghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7IQVbNfqBgAFbNfmBiAFbNfhJNQVJIls19yEGWzX2gAS9rufVNPcWUDT2FlCwMgY0AyEWWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPYWUDT1FlAoSwFXAH9nKUsBV38BZ0ghCjUBMgY1AkIGY0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABCKflwOwMgY0AyEXWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgX0SCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXeCA1+iEOWzX5IRJbNfhJNQVJIls19yEGWzX2gATDqpDBNPcWUDT2FlCwMgY0AyEXWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlA09hZQNPUWUChLAVcAf2cpSwFXfxlnSCEJNQEyBjUCQgVNSSEPDEAAU0ghDzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyESWw9ENANXMCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgTXSCEPNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+ld4IDX5IQ5bNfhJNQUXNfeABKeLwgs09xZQsDIGNAMhElsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCENNQEyBjUCQgRLSSEIDEACREkhEAxAAVNJIQYMQAD5SSERDEAAU0ghETQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyEOWw9ENANXMCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgPASCERNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFFzX4gAQv2ukdNPgWULAyBjQDIQ5bDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUChLAVcAf2cpSwFXfylnSCEPNQEyBjUCQgM9SCEQNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE4huzqbAyBjQDIQVbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAs5JgQYMQACTSCEQNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6STUFNfmABGnuOz40+VCwMgY0AyEFWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCERNQEyBjUCQgJQSCEINAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQtbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAeRJIQwMQADPSYEEDEAAiEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftJNQU1+oAEOLAjLTT6ULAyBjQDIQtbDEQ0/zEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIIRA1ATIGNQJCAWohDBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEYWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgEOSSMMQABHSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEYWwxENP+IAUc0A1cAIDT/NAMhBFsxACMyBjT/SQhCAGBIgaCNBogBJyI0ARJENARJIhJMNAISEURJNQVJIls1/yEGWzX+gASs0R/DNP8WUDT+FlCwNP+IAPYyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghCDUBMgY1AkIAObEisgEhDDT6C7III7IQNPw0+TT9IhJNsgezQgAAMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v547",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v548",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v547",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v548",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v647",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v662",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v663",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v679",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v697",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v713",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v617",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v634",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v647",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v662",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v663",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v678",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v679",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v697",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v713",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v617",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v634",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620032e8380380620032e88339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612f6b806200037d6000396000f3fe6080604052600436106101225760003560e01c80638b9fadc8116100a5578063ab53f2c61161006c578063ab53f2c61461025b578063b04759241461027e578063b608682e14610291578063bf2c5b24146102a4578063de736998146102b7578063f37e1b9b146102ca57005b80638b9fadc8146101fc5780638e3147691461020f578063980b6eac146102225780639f25181014610235578063a209ad4e1461024857005b80635471c5a8116100e95780635471c5a81461019b57806379b8ead7146101ae5780637eea518c146101c157806383230757146101d45780638acccf82146101e957005b80631e93b0f11461012b57806329bdceb91461014f5780632c10a159146101625780633a31ddbd146101755780633a3e43b01461018857005b3661012957005b005b34801561013757600080fd5b506003545b6040519081526020015b60405180910390f35b61012961015d3660046128ae565b6102dd565b6101296101703660046128ae565b610598565b6101296101833660046128ae565b610727565b6101296101963660046128e3565b6108de565b6101296101a93660046128ae565b610b69565b6101296101bc3660046128e3565b610cc4565b6101296101cf3660046128ae565b610f4f565b3480156101e057600080fd5b5060015461013c565b6101296101f73660046128ae565b6110b2565b61012961020a3660046128ae565b6112e6565b61012961021d3660046128ae565b61147e565b6101296102303660046128ae565b6115d8565b6101296102433660046128ae565b61184a565b6101296102563660046128ae565b6119a5565b34801561026757600080fd5b50610270611be8565b6040516101469291906128ff565b61012961028c3660046128ae565b611c85565b61012961029f3660046128ae565b611de0565b6101296102b23660046128ae565b61201c565b6101296102c53660046128ae565b612176565b6101296102d83660046128ae565b6122d0565b6102ed600960005414602661250a565b6103078135158061030057506001548235145b602761250a565b6000808055600280546103199061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546103459061295c565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa9190612a17565b90506103c26040518060200160405280600081525090565b6103d38260e001514310602861250a565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de89683384604051610404929190612ac3565b60405180910390a16104183415602461250a565b6060820151610433906001600160a01b03163314602561250a565b610441438360400151612530565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b60005543600155905161056d9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610591929190612767565b5050505050565b6105a8600160005414600961250a565b6105c2813515806105bb57506001548235145b600a61250a565b6000808055600280546105d49061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546106009061295c565b801561064d5780601f106106225761010080835404028352916020019161064d565b820191906000526020600020905b81548152906001019060200180831161063057829003601f168201915b50505050508060200190518101906106659190612aea565b905061067881606001514310600b61250a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516106a9929190612b63565b60405180910390a16106c281602001513414600861250a565b6106ca6127eb565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261072281612583565b505050565b610737600f60005414604b61250a565b6107518135158061074a57506001548235145b604c61250a565b6000808055600280546107639061295c565b80601f016020809104026020016040519081016040528092919081815260200182805461078f9061295c565b80156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b50505050508060200190518101906107f49190612c33565b9050610809816101200151431015604d61250a565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b338360405161083a929190612b63565b60405180910390a161084e3415604961250a565b6060810151610882906001600160a01b031633146108785781516001600160a01b0316331461087b565b60015b604a61250a565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156108c3573d6000803e3d6000fd5b50600080805560018190556108da90600290612844565b5050565b6108ee600f60005414604661250a565b6109088135158061090157506001548235145b604761250a565b60008080556002805461091a9061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546109469061295c565b80156109935780601f1061096857610100808354040283529160200191610993565b820191906000526020600020905b81548152906001019060200180831161097657829003601f168201915b50505050508060200190518101906109ab9190612c33565b90506109c36040518060200160405280600081525090565b6109d58261012001514310604861250a565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d9973384604051610a06929190612c50565b60405180910390a1610a1a3415604361250a565b8151610a32906001600160a01b03163314604461250a565b60408051610a7e91610a5891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114604561250a565b610a8c438360400151612530565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152601160005543600155905161056d91839101612cfc565b610b79600d60005414604061250a565b610b9381351580610b8c57506001548235145b604161250a565b600080805560028054610ba59061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd19061295c565b8015610c1e5780601f10610bf357610100808354040283529160200191610c1e565b820191906000526020600020905b815481529060010190602001808311610c0157829003601f168201915b5050505050806020019051810190610c369190612c33565b9050610c4b816101200151431015604261250a565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c7c929190612b63565b60405180910390a1610c903415603e61250a565b6060810151610882906001600160a01b03163314610cba5781516001600160a01b03163314610cbd565b60015b603f61250a565b610cd4600d60005414603b61250a565b610cee81351580610ce757506001548235145b603c61250a565b600080805560028054610d009061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2c9061295c565b8015610d795780601f10610d4e57610100808354040283529160200191610d79565b820191906000526020600020905b815481529060010190602001808311610d5c57829003601f168201915b5050505050806020019051810190610d919190612c33565b9050610da96040518060200160405280600081525090565b610dbb8261012001514310603d61250a565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610dec929190612c50565b60405180910390a1610e003415603861250a565b8151610e18906001600160a01b03163314603961250a565b60408051610e6491610e3e91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a61250a565b610e72438360400151612530565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f60005543600155905161056d91839101612cfc565b610f5f600160005414600d61250a565b610f7981351580610f7257506001548235145b600e61250a565b600080805560028054610f8b9061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb79061295c565b80156110045780601f10610fd957610100808354040283529160200191611004565b820191906000526020600020905b815481529060010190602001808311610fe757829003601f168201915b505050505080602001905181019061101c9190612aea565b90506110308160600151431015600f61250a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051611061929190612b63565b60405180910390a16110753415600c61250a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108c3573d6000803e3d6000fd5b6110c2601360005414605a61250a565b6110dc813515806110d557506001548235145b605b61250a565b6000808055600280546110ee9061295c565b80601f016020809104026020016040519081016040528092919081815260200182805461111a9061295c565b80156111675780601f1061113c57610100808354040283529160200191611167565b820191906000526020600020905b81548152906001019060200180831161114a57829003601f168201915b505050505080602001905181019061117f9190612c33565b905061119e604051806040016040528060008152602001600081525090565b6111b08261012001514310605c61250a565b7f3235f0e7edde3f00b94a3b6a2ebcd3d06174472fccd4a48a200cdba1c3becab033846040516111e1929190612ac3565b60405180910390a16111f53415605861250a565b6060820151611210906001600160a01b03163314605961250a565b6112228260e001518360a00151612530565b602082015260c082015161010083015114156112415760018152611279565b8060200151826101000151141561125b5760008152611279565b80602001518260c0015114156112745760028152611279565b600181525b6112816127eb565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526112e081612583565b50505050565b6112f6600b60005414603561250a565b6113108135158061130957506001548235145b603661250a565b6000808055600280546113229061295c565b80601f016020809104026020016040519081016040528092919081815260200182805461134e9061295c565b801561139b5780601f106113705761010080835404028352916020019161139b565b820191906000526020600020905b81548152906001019060200180831161137e57829003601f168201915b50505050508060200190518101906113b39190612d0b565b90506113c8816101000151431015603761250a565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033836040516113f9929190612b63565b60405180910390a161140d3415603361250a565b6060810151611441906001600160a01b031633146114375781516001600160a01b0316331461143a565b60015b603461250a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108c3573d6000803e3d6000fd5b61148e600560005414601761250a565b6114a8813515806114a157506001548235145b601861250a565b6000808055600280546114ba9061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546114e69061295c565b80156115335780601f1061150857610100808354040283529160200191611533565b820191906000526020600020905b81548152906001019060200180831161151657829003601f168201915b505050505080602001905181019061154b9190612d94565b905061155f8160a00151431015601961250a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051611590929190612b63565b60405180910390a16115a43415601561250a565b6060810151610882906001600160a01b031633146115ce5781516001600160a01b031633146115d1565b60015b601661250a565b6115e8600760005414601c61250a565b611602813515806115fb57506001548235145b601d61250a565b6000808055600280546116149061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546116409061295c565b801561168d5780601f106116625761010080835404028352916020019161168d565b820191906000526020600020905b81548152906001019060200180831161167057829003601f168201915b50505050508060200190518101906116a59190612e28565b90506116bd6040518060200160405280600081525090565b6116ce8260c001514310601e61250a565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516116ff929190612ac3565b60405180910390a16117133415601a61250a565b815161172b906001600160a01b03163314601b61250a565b611739438360400151612530565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e0840152600960005543600155905161056d9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b61185a601160005414605561250a565b6118748135158061186d57506001548235145b605661250a565b6000808055600280546118869061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546118b29061295c565b80156118ff5780601f106118d4576101008083540402835291602001916118ff565b820191906000526020600020905b8154815290600101906020018083116118e257829003601f168201915b50505050508060200190518101906119179190612c33565b905061192c816101200151431015605761250a565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338360405161195d929190612b63565b60405180910390a16119713415605361250a565b6060810151611441906001600160a01b0316331461199b5781516001600160a01b0316331461199e565b60015b605461250a565b6119b5600560005414601261250a565b6119cf813515806119c857506001548235145b601361250a565b6000808055600280546119e19061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054611a0d9061295c565b8015611a5a5780601f10611a2f57610100808354040283529160200191611a5a565b820191906000526020600020905b815481529060010190602001808311611a3d57829003601f168201915b5050505050806020019051810190611a729190612d94565b9050611a8a6040518060200160405280600081525090565b611a9b8260a001514310601461250a565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051611acc929190612ac3565b60405180910390a1611ae03415601061250a565b8151611af8906001600160a01b03163314601161250a565b611b06438360400151612530565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161056d565b600060606000546002808054611bfd9061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054611c299061295c565b8015611c765780601f10611c4b57610100808354040283529160200191611c76565b820191906000526020600020905b815481529060010190602001808311611c5957829003601f168201915b50505050509050915091509091565b611c95601360005414605f61250a565b611caf81351580611ca857506001548235145b606061250a565b600080805560028054611cc19061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054611ced9061295c565b8015611d3a5780601f10611d0f57610100808354040283529160200191611d3a565b820191906000526020600020905b815481529060010190602001808311611d1d57829003601f168201915b5050505050806020019051810190611d529190612c33565b9050611d67816101200151431015606161250a565b7f492f6c86d056da1348678f7aea844a06f3e1e163bb0571aa6c33fa50dab156433383604051611d98929190612b63565b60405180910390a1611dac3415605d61250a565b6060810151611441906001600160a01b03163314611dd65781516001600160a01b03163314611dd9565b60015b605e61250a565b611df0600b60005414603061250a565b611e0a81351580611e0357506001548235145b603161250a565b600080805560028054611e1c9061295c565b80601f0160208091040260200160405190810160405280929190818152602001828054611e489061295c565b8015611e955780601f10611e6a57610100808354040283529160200191611e95565b820191906000526020600020905b815481529060010190602001808311611e7857829003601f168201915b5050505050806020019051810190611ead9190612d0b565b9050611ec56040518060200160405280600081525090565b611ed78261010001514310603261250a565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611f08929190612ac3565b60405180910390a1611f1c3415602e61250a565b6060820151611f37906001600160a01b03163314602f61250a565b611f45438360400151612530565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d60005543600155905161056d91839101612cfc565b61202c600760005414602161250a565b6120468135158061203f57506001548235145b602261250a565b6000808055600280546120589061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546120849061295c565b80156120d15780601f106120a6576101008083540402835291602001916120d1565b820191906000526020600020905b8154815290600101906020018083116120b457829003601f168201915b50505050508060200190518101906120e99190612e28565b90506120fd8160c00151431015602361250a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338360405161212e929190612b63565b60405180910390a16121423415601f61250a565b6060810151610882906001600160a01b0316331461216c5781516001600160a01b0316331461216f565b60015b602061250a565b612186600960005414602b61250a565b6121a08135158061219957506001548235145b602c61250a565b6000808055600280546121b29061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546121de9061295c565b801561222b5780601f106122005761010080835404028352916020019161222b565b820191906000526020600020905b81548152906001019060200180831161220e57829003601f168201915b50505050508060200190518101906122439190612a17565b90506122578160e00151431015602d61250a565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051612288929190612b63565b60405180910390a161229c3415602961250a565b6060810151611441906001600160a01b031633146122c65781516001600160a01b031633146122c9565b60015b602a61250a565b6122e0601160005414605061250a565b6122fa813515806122f357506001548235145b605161250a565b60008080556002805461230c9061295c565b80601f01602080910402602001604051908101604052809291908181526020018280546123389061295c565b80156123855780601f1061235a57610100808354040283529160200191612385565b820191906000526020600020905b81548152906001019060200180831161236857829003601f168201915b505050505080602001905181019061239d9190612c33565b90506123b56040518060200160405280600081525090565b6123c78261012001514310605261250a565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee433846040516123f8929190612ac3565b60405180910390a161240c3415604e61250a565b8151612424906001600160a01b03163314604f61250a565b612432438360400151612530565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015261010080860151908401528351610120840152601360005543600155905161056d91839101612cfc565b816108da5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261253d8382612edc565b915081101561257d5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612527565b92915050565b604080516020810190915260008152602082015151600114156126a7576125ba826020015160200151836000015160400151612530565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906112e0929190612767565b602082015151156126bd578151606001516126c1565b8151515b6001600160a01b03166108fc6126e06002856000015160200151612708565b6040518115909202916000818181858888f193505050501580156108c3573d6000803e3d6000fd5b600081158061272c5750828261271e8183612ef4565b925061272a9083612f13565b145b61257d5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612527565b8280546127739061295c565b90600052602060002090601f01602090048101928261279557600085556127db565b82601f106127ae57805160ff19168380011785556127db565b828001600101855582156127db579182015b828111156127db5782518255916020019190600101906127c0565b506127e7929150612881565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161283f60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546128509061295c565b6000825580601f10612860575050565b601f01602090049060005260206000209081019061287e9190612881565b50565b5b808211156127e75760008155600101612882565b6000604082840312156128a857600080fd5b50919050565b6000604082840312156128c057600080fd5b6128ca8383612896565b9392505050565b6000606082840312156128a857600080fd5b6000606082840312156128f557600080fd5b6128ca83836128d1565b82815260006020604081840152835180604085015260005b8181101561293357858101830151858201606001528201612917565b81811115612945576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061297057607f821691505b602082108114156128a857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156129c357634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156129c357634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114612a1257600080fd5b919050565b6000610100808385031215612a2b57600080fd5b6040519081019067ffffffffffffffff82118183101715612a5c57634e487b7160e01b600052604160045260246000fd5b81604052612a69846129fb565b81526020840151602082015260408401516040820152612a8b606085016129fb565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152606081016128ca602083018480358252602090810135910152565b600060808284031215612afc57600080fd5b6040516080810181811067ffffffffffffffff82111715612b2d57634e487b7160e01b600052604160045260246000fd5b604052612b39836129fb565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214612b9157600080fd5b80604085015250509392505050565b60006101408284031215612bb357600080fd5b612bbb612991565b9050612bc6826129fb565b81526020820151602082015260408201516040820152612be8606083016129fb565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b60006101408284031215612c4657600080fd5b6128ca8383612ba0565b6001600160a01b0383168152608081016128ca60208301848035825260208082013590830152604090810135910152565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151612cbc60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b610140810161257d8284612c81565b60006101208284031215612d1e57600080fd5b612d266129c9565b612d2f836129fb565b81526020830151602082015260408301516040820152612d51606084016129fb565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c08284031215612da657600080fd5b60405160c0810181811067ffffffffffffffff82111715612dd757634e487b7160e01b600052604160045260246000fd5b604052612de3836129fb565b81526020830151602082015260408301516040820152612e05606084016129fb565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612e3a57600080fd5b60405160e0810181811067ffffffffffffffff82111715612e6b57634e487b7160e01b600052604160045260246000fd5b604052612e77836129fb565b81526020830151602082015260408301516040820152612e99606084016129fb565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612eef57612eef612ec6565b500190565b6000816000190483118215151615612f0e57612f0e612ec6565b500290565b600082612f3057634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212201023954fb292e1fe964f95916a1e4f916b7d9fc59aa728b77fe466cfeb0b25aa64736f6c634300080c0033`,
  BytecodeLen: 13032,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:78:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:157:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:89:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:101:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:102:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:105:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:115:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:116:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:118:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:119:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:130:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:132:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:134:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:141:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:142:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:149:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Mat": Mat,
  "Sam": Sam
  };
export const _APIs = {
  };
