@echo off

set users=5 10 50 100 500 1000

for %%u in (%users%) do (
  echo Running test with %%u users...
  
  jmeter -n -t "TestPlan\Test Plan.jmx" -Jthreads=%%u -Jrampup=1 -l gRPC_result/results_%%u_users.jtl
  
  echo Waiting for 15 seconds...
  timeout /t 15 >nul
)

echo All tests completed!