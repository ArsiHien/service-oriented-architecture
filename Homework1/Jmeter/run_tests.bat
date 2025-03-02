@echo off

set users=5 10 50 100 500 1000 10000

for %%u in (%users%) do (
  echo Running test with %%u users...
  
  jmeter -n -t "TestPlan\Test Plan.jmx" -Jthreads=%%u -Jrampup=1 -l thrift_result/results_%%u_users.jtl
  
  echo Waiting for 5 seconds...
  timeout /t 5 >nul
)

echo All tests completed!